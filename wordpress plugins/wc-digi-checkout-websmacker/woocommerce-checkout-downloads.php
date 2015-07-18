<?php
	/*
	Plugin Name: Digital Goods Checkout for WooCommerce
	Plugin URI: http://codecanyon.net/user/WebSmacker
	Description: This plugin will remove unnecessary fields from checkout, like address and phone number for only downloadable products.
	Version: 1.3
	Author: WebSmacker
	Author URI: http://codecanyon.net/user/WebSmacker
	License: varies (please see http://codecanyon.net/licenses)
	*/

	add_filter( 'woocommerce_checkout_fields' , 'custom_override_checkout_fields' );
	
	// Our hooked in function - $fields is passed via the filter!
	function custom_override_checkout_fields( $fields ) {
	 global $woocommerce;
		
		$hasPhysicalProduct = false;
		if ( ! empty( $woocommerce->cart->cart_contents ) ) {
			// Cart is not empty, now loop through the cart 
			$cart = $woocommerce->cart->get_cart();
			foreach ( $cart as $key => $values ) {
  
			  $_product = get_product( $values['variation_id'] ? $values['variation_id'] : $values['product_id'] );

			  if ( ! empty( $_product ) && $_product->exists() && $values['quantity'] > 0 ) {
				  if ($_product->virtual == 'no' && $_product->downloadable == 'no') {
					$hasPhysicalProduct = true;
				  }
			  }
			}
		}
		
		if ($hasPhysicalProduct == false)
		{			
			unset($fields['billing']['billing_address_1']);
			unset($fields['billing']['billing_address_2']);			
			unset($fields['billing']['billing_company']);
			unset($fields['billing']['billing_city']);
			unset($fields['billing']['billing_postcode']);
			unset($fields['billing']['billing_country']);
			unset($fields['billing']['billing_state']);
			unset($fields['billing']['billing_phone']);
		}
		return $fields;
	}
	
	function custom_override_billing_fields( $fields ) {
		unset($fields['billing_state']);
		unset($fields['billing_country']);
		unset($fields['billing_address_1']);
		unset($fields['billing_address_2']);
		unset($fields['billing_postcode']);
		unset($fields['billing_city']);
		$fields['billing_phone']['required'] = false;
		
		return $fields;
	}
	function custom_override_shipping_fields( $fields ) {
		unset($fields['shipping_state']);
		unset($fields['shipping_country']);
		unset($fields['shipping_company']);
		unset($fields['shipping_address_1']);
		unset($fields['shipping_address_2']);
		unset($fields['shipping_postcode']);
		unset($fields['shipping_city']);
		
		return $fields;
	}
	
	function custom_override_account_page_addresses($fields) { 
		unset($fields['address_1']);
		unset($fields['address_2']);
		unset($fields['city']);
		unset($fields['state']);
		unset($fields['postcode']);
		unset($fields['country']);
						
		return $fields; 
	} 
	
	function custom_override_account_page_address_title() { 
		return 'My Info'; 
	} 
	
	function custom_override_account_page_address_description() { 
		return 'This is your current account information.'; 
	} 
	
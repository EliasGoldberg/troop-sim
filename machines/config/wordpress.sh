#!/bin/bash

wget -q http://wordpress.org/latest.tar.gz # download wordpress
tar -xzf latest.tar.gz                 # uncompress it

# setup the wordpress database and user
mysql -u root --password='vagrant' -e 'CREATE DATABASE wordpress;'
mysql -u root --password='vagrant' -e 'CREATE USER wordpressuser@localhost;'
mysql -u root --password='vagrant' -e "SET PASSWORD FOR wordpressuser@localhost= PASSWORD('vagrant');"
mysql -u root --password='vagrant' -e "GRANT ALL PRIVILEGES ON wordpress.* TO wordpressuser@localhost IDENTIFIED BY 'vagrant';"
mysql -u root --password='vagrant' -e 'FLUSH PRIVILEGES;'



# config wordpress and move to the apache server folder
sudo cp -r wordpress/* /var/www/html
sudo cp config/wp-config.php /var/www/html
sudo service httpd restart

# install wordpress using the command line instead of in-browser
curl -O -s https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar
sudo chmod +x wp-cli.phar
#sudo mv wp-cli.phar /usr/local/bin/wp
./wp-cli.phar core install --path='/var/www/html' --url=http://vimes.troop-sim.co --title='Troop Sim' --admin_user=admin --admin_password=password --admin_email=elias.goldberg@gmail.com

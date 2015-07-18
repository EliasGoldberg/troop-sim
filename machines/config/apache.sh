#!/bin/bash

# let apache through the firewall
sudo iptables -I INPUT 1 -p tcp --dport 80 -j ACCEPT
sudo service iptables save
sudo service network restart

sudo yum install -y httpd # install apache
sudo chkconfig httpd on   # set apache to run on boot
sudo service httpd start  # start apache now
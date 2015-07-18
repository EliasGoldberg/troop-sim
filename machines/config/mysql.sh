#!/bin/bash

sudo yum install -y mysql-server # install apache
sudo chkconfig mysqld on   # set apache to run on boot
sudo service mysqld start  # start apache now

FROM composer:1.8 AS composer

FROM php:8.1-apache

COPY --from=composer /usr/bin/composer /usr/bin/composer

ADD https://github.com/mlocati/docker-php-extension-installer/releases/latest/download/install-php-extensions /usr/local/bin/

RUN chmod +x /usr/local/bin/install-php-extensions && \
    install-php-extensions pdo_mysql intl

RUN curl -sSk https://getcomposer.org/installer | php -- --disable-tls && \
   mv composer.phar /usr/local/bin/composer

RUN apt update && apt install -yqq nodejs npm \
    unzip

COPY . /var/www/

COPY ./docker/vhosts/apache.conf /etc/apache2/sites-available/000-default.conf

WORKDIR /var/www/

RUN composer install

EXPOSE 80
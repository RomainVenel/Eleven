# Eleven

Eleven est une petite application qui permet de créer son propre astronaute animalier.

##  <a name='Howtoinstalltheapp'></a>How to install the app ?

Eleven est une application Symfony/PHP/Apache/MySQL.

La documentation permet d'installer l'application avec Docker.

<a name='Prerequisites'></a>Prérequis

- [PHP 8.1](https://www.php.net/downloads.php)
- [Composer](https://getcomposer.org/)
- [Docker](https://www.docker.com/)

##  <a name='Cloneandinstall'></a>Clone and install

```bash
git clone https://github.com/RomainVenel/Eleven.git
cd Eleven
```

##  Build et Start le container

```bash
docker-compose build
docker-compose up -d
```

##  <a name='CreateanewUser'></a>Créer la base de données

Il est possible de le faire via Docker

```bash
docker exec -it www_docker_symfony_eleven bash
php bin/console doctrine:database:create
php bin/console d:m:m
```

Launch your browser and have fun !

- Application => http://localhost:8080
- PhpMyAdmin => http://localhost:8081

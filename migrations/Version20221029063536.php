<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221029063536 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE astronaut DROP FOREIGN KEY FK_5DADB6E5C54C8C93');
        $this->addSql('DROP TABLE animal');
        $this->addSql('DROP INDEX IDX_5DADB6E5C54C8C93 ON astronaut');
        $this->addSql('ALTER TABLE astronaut DROP type_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE animal (id INT AUTO_INCREMENT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE astronaut ADD type_id INT NOT NULL');
        $this->addSql('ALTER TABLE astronaut ADD CONSTRAINT FK_5DADB6E5C54C8C93 FOREIGN KEY (type_id) REFERENCES animal (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_5DADB6E5C54C8C93 ON astronaut (type_id)');
    }
}

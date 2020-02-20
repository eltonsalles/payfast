create table payments (
    id int not null primary key auto_increment,
    status varchar(255), data varchar(255),
    forma_de_pagamento varchar(255),
    valor decimal,
    moeda varchar(255),
    descricao varchar(255)
);

FROM ubuntu:18.04


RUN	apt update &&\
    apt install -y curl &&\
    curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh &&\
    bash nodesource_setup.sh &&\
    apt install -y nodejs &&\
    apt install -y git &&\
    mkdir test &&\
    git clone https://github.com/ohansemmanuel/edc-strpc.git &&\
    #
    cd edc-strpc &&\
    git checkout master &&\
    cd 01-c-ui &&\
    npm install &&\
    cd .. &&\
    #
    cd 02-m-ui &&\
    npm install &&\
    cd .. &&\
    #
    cd 03-p-example &&\
    npm install &&\
    cd .. &&\
    #
    cd 04-p-example-partial &&\
    npm install &&\
    cd .. &&\
    #
    cd 05-border-exercise &&\
    npm install &&\
    cd ..

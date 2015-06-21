FROM    ubuntu
RUN     sudo apt-get update
RUN     sudo apt-get install -y build-essential \
        libreadline-gplv2-dev libncursesw5-dev libssl-dev libsqlite3-dev tk-dev libgdbm-dev libc6-dev libbz2-dev \
        curl wget git

# Install Node.js and npm
RUN     curl -sL https://deb.nodesource.com/setup_0.12 | sudo bash -
RUN     sudo apt-get install -y nodejs

# Install Python b' Kraken.js
RUN     wget http://python.org/ftp/python/2.7.5/Python-2.7.5.tgz
RUN     tar -xvf Python-2.7.5.tgz
WORKDIR Python-2.7.5
RUN     ./configure
RUN     make
RUN     sudo make install
WORKDIR /
RUN     rm -rf Python-2.7.5

# App
COPY    . /src
RUN     rm -rf /src
RUN     git clone https://github.com/chilangolabs/BuddiesBack.git /src
# Install app dependencies
RUN     cd /src; npm install

EXPOSE  8080
CMD     cd /src; git pull origin master && node server.js
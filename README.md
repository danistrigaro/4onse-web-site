#REQUIREMENTS
- npm
- create-react-app

## HOW TO INSTALL NPM (64bit)

1. Download nodejs
```
cd $HOME/Scaricati
wget https://nodejs.org/dist/v6.9.1/node-v6.9.1-linux-x64.tar.xz
```

2. nella home creare cartella local entrarci e scompattare l'archivio scaricato
```
mkdir $HOME/local
tar Jxvf $HOME/Scaricati/node-v6.9.1-linux-x64.tar.xz
mv $HOME/Scaricati/node-v6.9.1-linux-x64 $HOME/local
```

3. editare file .bashrc ed aggiungere le seguenti righe

```
export PATH="$PATH:$HOME/local/node-v6.9.1-linux-x64/bin"
export NODE_PATH="$NODE_PATH:$HOME/local/node-v6.9.1-linux-x64/lib/node_modules"
```

## 4onse web site
## HOW TO DEVELOP AND BUILD

```
npm install -g create-react-app
git clone https://github.com/danistrigaro/4onse-web-site.git
cd 4onse-web-site
npm install
```

**Development**
```
npm start
```

**Build the website**
```
sh ./build.sh
```

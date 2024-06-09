###ssh without password

1. generate an ssh key
```
ssh-keygen
```

2. copy the key to a server
```
ssh-copy-id -i ~/.ssh/<mykey.pub> <user>@<host>
```
3. test the new key
```
ssh -i ~/.ssh/<mykey.pub> <user>@<host>
```

4. ssh with alias
```
echo "
Host xxx
  User user
  HostName host
  IdentityFile ~/.ssh/mykey
" >> ~/.ssh/config
ssh xxx
```



### show public key
1. export to PEM encoded  format file from jks
```
keytool -list -rfc -keystore mykeystore.jks -alias certificate_alias -storepass password
```
2. If this certificate is DER-encoded (binary), use:
```
openssl x509 -inform der -in client.crt -pubkey -noout
for PEM-encoded use -inform pem option (or no -inform at all).
```
To see details of public key, use:
```
openssl x509 -inform der -in client.crt -pubkey -noout | openssl rsa -pubin -text -noout
```

### ssh without password

1. generate an ssh key
```bash
ssh-keygen
```

2. copy the key to a server
```bash
ssh-copy-id -i ~/.ssh/<mykey.pub> <user>@<host>
```
3. test the new key
```bash
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

### sshd 服务安全设置
1. disable ssh as a root user
   >修改文件/etc/ssh/sshd_config， 把PermitRootLogin yes 改 no

2. change port from 22 to 自定义
   >修改文件/etc/ssh/sshd_config， 找到 Port 行，修改为自定义的值，并去掉注释

3. disable password ssh login 
   >找到PasswordAuthentication，并修改值为 no
4. 重启 sshd 服务
    ```bash
    sudo systemctl restart sshd
    ```

### show public key
1. export to PEM encoded  format file from jks
```bash
keytool -list -rfc -keystore mykeystore.jks -alias certificate_alias -storepass password
```
2. If this certificate is DER-encoded (binary), use:
```bash
openssl x509 -inform der -in client.crt -pubkey -noout
for PEM-encoded use -inform pem option (or no -inform at all).
```
To see details of public key, use:
```bash
openssl x509 -inform der -in client.crt -pubkey -noout | openssl rsa -pubin -text -noout
```

### python ssl error
如果运行 python 时出错了，如下：
```
urlopen error [SSL: CERTIFICATE_VERIFY_FAILED] certificate verify failed: unable to get local issuer certificate (_ssl.c:992)>
```
可以添加如下设置规避
```python
import ssl
ssl._create_default_https_context = ssl._create_unverified_context
```
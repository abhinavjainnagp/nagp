# nagp

•Link for the code repository: https://github.com/abhinavjainnagp/nagp
•Docker hub URL for docker images: https://hub.docker.com/repository/docker/abhinavjainnagpdocker/api-service/general
•URL for Service API tier to view the records from backend tier: http://35.247.173.150:8080/
•Link for screen recording video showing everything mentioned above. https://nagarro-my.sharepoint.com/:v:/p/abhinav_jain/EbjnuVdynKZDgvLLvku0mvYBVsxmGC1gnNz6W3TgBvVpHg?e=Bxa68q
Execution Steps-->
kubectl apply -f mysql-configmap.yaml
kubectl apply -f mysql-secret.yaml
kubectl apply -f mysql-statefulset.yaml
kubectl apply -f mysql-service.yaml

kubectl run mysql-client --image=mysql:latest -i -t --rm --restart=Never -- mysql -h mysql-0.mysql -u root -proot

use mysql;
create table NAGPDATA(NAME VARCHAR(255));
insert into NAGPDATA values ('Abhinav');
insert into NAGPDATA values ('Maitri');
insert into NAGPDATA values ('Vivita');

docker login
docker build -t abhinavjainnagpdocker/api-service:16 .
docker images
docker run -d --name node-container6060 -p 8080:8080 abhinavjainnagpdocker/api-service:16
docker push abhinavjainnagpdocker/api-service:16

kubectl apply -f api-configmap.yaml
kubectl apply -f api-secret.yaml
kubectl apply -f api-deployment.yaml
kubectl apply -f api-service.yaml
kubectl apply -f api-hpa.yaml

kubectl exec -it <pod> --sh

function factorial(n) {
	if (n == 0)
        return 1;
    else
        return n * factorial(n-1)
}

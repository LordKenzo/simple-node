SUBSCRIPTION="Versione di valutazione gratuita"
RESOURCEGROUP="appsvc_rg_linux_centralus"
LOCATION="centralus"
PLANNAME="appsvc_asp_linux_centralus"
PLANSKU="B1"
SITENAME="simple-node-app"
RUNTIME="node|10.10"



# To set up deployment from a local git repository, uncomment the following commands.
# first, set the username and password (use environment variables!)
USERNAME="simple-node-app\$simple-node-app"
PASSWORD="hETdB6l98jwbgBBvglcsAdfpzdxJRW1ZN8bdSt7dve5QLxvqv0RJKSmiFqk1"
az webapp deployment user set --user-name $USERNAME --password $PASSWORD

# now, configure the site for deployment. in this case, we will deploy from the local git repository
# you can also configure your site to be deployed from a remote git repository or set up a CI/CD workflow
az webapp deployment source config-local-git --name $SITENAME --resource-group $RESOURCEGROUP

# the previous command returned the git remote to deploy to
# use this to set up a new remote named "azure"
git remote add azure "https://$USERNAME@$SITENAME.scm.azurewebsites.net/$SITENAME.git"
# push master to deploy the site
# git push azure master

# browse to the site
# az webapp browse --name $SITENAME --resource-group $RESOURCEGROUP

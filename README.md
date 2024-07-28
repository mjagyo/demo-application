## How to run application

Make sure docker is installed in your local machine, then do:
`docker compose up --build`

It should spawn containerized postgre and web application, then go to your browser access this location:
`http://localhost:40004/api/health` it should response
```
{
    "status": "ok"
}
```

## How to run helm

Helm is being used to properly managed kubernetes manifests file, to execute it follow this command:

`helm upgrade --install release_demo helm/demo`

## Terraform

Follow this link for authentication: https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/guides/service_principal_client_secret

We are using terraform to provision the resources needed in our cloud platform, in this case we are trying to deploy a resource group, vm, and its virtual network, follow this command to execute it:

Create a `terraform.tfvars` under `terraform` folder and make sure to follow the document above to fill this variables amd this will be the content of your `terraform.tfvars`

```
subscription_id = ""
tenant_id       = ""
client_id       = ""
client_secret   = ""
```

# Connect to Azure
Connect-AzAccount
# Check if Az module is installed
if (-not (Get-Module -Name Az -ListAvailable)) {
    # Install Az module
    Install-Module -Name Az -AllowClobber -Force
}

# Import Az module
Import-Module -Name Az -Force
# Set variables
$resourceGroupName = "myResourceGroup"
$location = "eastus"
$storageAccountName = "mystorageaccount"
$skuName = "Standard_LRS"

# Create a new resource group
New-AzResourceGroup -Name $resourceGroupName -Location $location

# Create a new storage account
New-AzStorageAccount -ResourceGroupName $resourceGroupName -Name $storageAccountName -Location $location -SkuName $skuName

# Display the storage account details
Get-AzStorageAccount -ResourceGroupName $resourceGroupName -Name $storageAccountName
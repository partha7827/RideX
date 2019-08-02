const abi2=[
	{
		"constant": false,
		"inputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "username",
				"type": "string"
			},
			{
				"name": "phoneNumber",
				"type": "string"
			},
			{
				"name": "vehicle",
				"type": "string"
			},
			{
				"name": "vehicleNo",
				"type": "string"
			},
			{
				"name": "category",
				"type": "string"
			},
			{
				"name": "password",
				"type": "string"
			},
			{
				"name": "key",
				"type": "string"
			}
		],
		"name": "set",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "username",
				"type": "string"
			}
		],
		"name": "get",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
   }
   
];


const address2="0x7984f547666f9c3b5f7f93a2b19004c8538955a0"; //user contract address

module.exports.abi2=abi2;
module.exports.address2=address2;
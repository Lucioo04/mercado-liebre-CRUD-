const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');


const getJson = () =>{
	const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
	const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
	return products;
}
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		products = getJson();
		const visitados = products.filter (product => product.category == 'visited');
		const ofertas = products.filter (product => product.category == 'in-sale');
		res.render('index',{visitados,ofertas,toThousand})
	},
	search: (req, res) => {
		const busqueda = req.query.keywords; 
		const resultado = [];

		products.forEach(elemento => {
			if (elemento.name.toLowerCase().includes(busqueda.toLowerCase())) {
				resultado.push(elemento);
			}
		});
				
	
	
	res.render ('results', {resultado,toThousand,busqueda,products})// Do the magic

	}}
	

module.exports = controller;

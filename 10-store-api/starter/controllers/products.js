const product = require('../models/product');

const getAllProducts = async (req, res) => {
  // // get all products
  // const customSortedProducts = await product.find({});
  // res
  //   .status(200)
  //   .json({ customSortedProducts, nbhits: customSortedProducts.length });
  // console.log(req.query);
  //
  // // get sorted products - with featured value as true
  // const customSortedProducts = await product.find({ featured: true });
  // res
  //   .status(200)
  //   .json({ customSortedProducts, nbhits: customSortedProducts.length });
  //
  // // get sorted products - with automated query search
  // const customSortedProducts = await product.find(req.query);
  // res
  //   .status(200)
  //   .json({ customSortedProducts, nbhits: customSortedProducts.length });
  //
  /* how to search with available searchable options on the query strings and ignore every other unavailable searchable or unsearchable 
  option added in the query string by destructuring only the searchable options to not return an empty result object*/
  const { featured, company, name } = req.query;
  const queryObject = {};

  // check if featured exist in the query string
  if (featured) {
    // find a simpler syntax to handle this process.
    queryObject.featured = featured === 'true' ? true : false;
  }

  // check if company exist in the query string
  if (company) {
    queryObject.company = company;
  }

  // check if name exist in the query string
  if (name) {
    // check how the regex example was used in the getAllProductsStatic controller below to understand it better.
    queryObject.name = { $regex: name, $options: 'i' };
  }

  console.log(req.query);
  console.log(queryObject);
  const customSortedProducts = await product.find(queryObject);
  res
    .status(200)
    .json({ nbhits: customSortedProducts.length, customSortedProducts });

  // this time we handle async errors with the installed express package and read the error with our custom error handle
  // throw new Error('testing async errors');
};

const getAllProductsStatic = async (req, res) => {
  // // get sorted products - using regex. The "i" option simply means the search will be case "insensitive".
  // const search = 'sue';
  // const customSortedProducts = await product.find({
  //   name: { $regex: search, $options: 'i' },
  // });
  // res
  //   .status(200)
  //   .json({ nbhits: customSortedProducts.length, customSortedProducts });
  //
  // sorted response entries - the example below sorts the list backward-alphabetically. Use only "name" to sort forward alphabetically
  // explore sorting more - especially from the mongoose docs.
  // const customSortedProducts = await product.find({}).sort('-name');
  // it can take multiple arguments as shown below
  // const customSortedProducts = await product.find({}).sort('-name price');

  // select works like sorting but - it only returns a result based on the entered/requested options.
  // the below example returns only name and price fields of the entries - id is compulsory/default so it come added along
  // const customSortedProducts = await product.find({}).select('name price');
  //
  // limit returns a number of entries based on the entered/requested limit.
  // the below example returns only name and price fields of the entries.
  // const customSortedProducts = await product.find({}).limit(30);
  // a bigger limit input simply returns all the result simply

  //
  // skip: the below example skips the first 5 elements and returns 10 instead of the remaining 18 to give.
  // const customSortedProducts = await product.find({}).skip(5).limit(10);
  // res
  //   .status(200)
  //   .json({ nbhits: customSortedProducts.length, customSortedProducts });
  // // console.log(req.query);

  // By combining skip and limit, you can create API pagination (pages). You simply choose the number of entries to return as a page.

  // Numeric filters help us filter element based on numerical inputs - e.g those with price less than an inputed amount.
  // const customSortedProducts = await product.find({ price: { $gt: 40 } });
  const customSortedProducts = await product.find({ price: { $lt: 40 } });
  res
    .status(200)
    .json({ nbhits: customSortedProducts.length, customSortedProducts });
};

module.exports = {
  getAllProductsStatic,
  getAllProducts,
};

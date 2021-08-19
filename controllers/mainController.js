/* const controller = {
    index: (req, res) => {
        return res.render('index');
    },
    market: (req, res) => {
        return res.render('market')
    }
   
}
*/

  
const mainController = {
    home: (req, res) =>{
      res.render("index")
    }
  }
  
  module.exports = mainController;
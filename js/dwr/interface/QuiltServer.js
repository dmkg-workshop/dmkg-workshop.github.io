if (typeof dwr == 'undefined' || dwr.engine == undefined) throw new Error('You must include DWR engine before including this file');

(function() {
  if (dwr.engine._getObject("QuiltServer") == undefined) {
    var p;
    
    p = {};

    /**
     * @param {class [Ljava.lang.String;} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.main = function(p0, callback) {
      return dwr.engine._execute(p._path, 'QuiltServer', 'main', arguments);
    };

    /**
     * @param {class java.lang.String} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.getInfo = function(p0, callback) {
      return dwr.engine._execute(p._path, 'QuiltServer', 'getInfo', arguments);
    };

    /**
     * @param {class java.lang.String} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.loadAndTranslateModel = function(p0, callback) {
      return dwr.engine._execute(p._path, 'QuiltServer', 'loadAndTranslateModel', arguments);
    };

    /**
     * @param {class java.lang.String} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.readStringIntoModel = function(p0, callback) {
      return dwr.engine._execute(p._path, 'QuiltServer', 'readStringIntoModel', arguments);
    };

    /**
     * @param {interface com.hp.hpl.jena.rdf.model.Model} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.model2ntriples = function(p0, callback) {
      return dwr.engine._execute(p._path, 'QuiltServer', 'model2ntriples', arguments);
    };

    /**
     * @param {class java.lang.String} p0 a param
     * @param {function|Object} callback callback function or options object
     */
    p.getCandidateEntities = function(p0, callback) {
      return dwr.engine._execute(p._path, 'QuiltServer', 'getCandidateEntities', arguments);
    };
    
    dwr.engine._setObject("QuiltServer", p);
  }
})();


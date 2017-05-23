/**
 * Term.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      columnName: 'term_id',
      type: 'integer',
      autoIncrement:true,
      primaryKey: true,
      required: true
    },
    name: {
      type: 'string'
    },
    slug: {
      type: 'string'
    },
    group: {
      columnName: 'term_group',
      type: 'integer'
    }
  },
  tableName: 'wp_terms',
  autoCreatedAt: false,
  autoUpdatedAt: false,
};


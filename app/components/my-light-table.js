import Ember from 'ember';
import Table from 'ember-light-table';

const MyLightTable = Ember.Component.extend({
  tagName: null,
  dir: null,
  valuePath: null,
  format: null,
  init() {
    this._super();
    this.set('modelCopy', this.get('model').slice());
    this.set('table', new Table(this.get('columns'), this.get('modelCopy'), { enableSync: true }));
  },
  sorter: function() {
    const model = this.get('modelCopy'),
          dir = this.get('dir'),
          valuePath = this.get('valuePath'),
          format = this.get('format');
    if (dir !== null && valuePath !== null) {
      // const cachedValues = {};
      // const valueGetter = item => {
      //   let value = cachedValues[item];
      //   if (value === undefined) {
      //     value = item.get(valuePath);
      //     if (format) {
      //       value = format(value);
      //     }
      //     cachedValues[item] = value;
      //   }
      //   return value;
      // };
      const length = model.length;
      model.arrayContentWillChange(0, length, length);
      // model.sort((a, b) => {
      //   a = valueGetter(a);
      //   b = valueGetter(b);
      //   if (dir === 'asc') {
      //     return a < b ? -1 : 1;
      //   } else if (dir === 'desc') {
      //     return a < b ? 1 : -1;
      //   }
      //   return 0;
      // });
      model.arrayContentDidChange(0, length, length);
    }
  }.observes('dir', 'valuePath', 'format'),
  actions: {
    onColumnClick(column) {
      if (column.sorted) {
        this.setProperties({
          dir: column.ascending ? 'asc' : 'desc',
          valuePath: column.valuePath,
          format: column.format
        });
      }
    }
  }
});

MyLightTable.reopenClass({
  positionalParams: ['columns', 'model']
});

export default MyLightTable;
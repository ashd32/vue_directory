Vue.component('datatable', {
  template: "#datatable",
  props: ['items'],
  data: function () {
    return {
      searchKey: '',
      sortBy: 'name',
      sortOrder: 'asc'
    }
  },
  computed: {
    orderedList() {
      var list = this.items.filter(
        function (item) {
          // var filtlist = item.name.toLowerCase().indexOf(this.searchKey.toLowerCase()) > -1 ||
          var filtlist = item.memberNum.toLowerCase().indexOf(this.searchKey.toLowerCase()) > -1 ||
                          item.orgType.toLowerCase().indexOf(this.searchKey.toLowerCase()) > -1 ||
                          item.name.toLowerCase().indexOf(this.searchKey.toLowerCase()) > -1 ||
                          item.mission.toLowerCase().indexOf(this.searchKey.toLowerCase()) > -1 ||
                          item.contact.toLowerCase().indexOf(this.searchKey.toLowerCase()) > -1 ||
                          item.gender.toLowerCase().indexOf(this.searchKey.toLowerCase()) > -1 ||
                          item.address.toLowerCase().indexOf(this.searchKey.toLowerCase()) > -1 ||
                          item.city.toLowerCase().indexOf(this.searchKey.toLowerCase()) > -1 ||
                          item.state.toLowerCase().indexOf(this.searchKey.toLowerCase()) > -1 ||
                          item.zip.toLowerCase() == this.searchKey.toLowerCase() > -1 ||
                          item.country.toLowerCase().indexOf(this.searchKey.toLowerCase()) > -1 ||
                          item.email.toLowerCase().indexOf(this.searchKey.toLowerCase()) > -1 ||
                          item.website.toLowerCase().indexOf(this.searchKey.toLowerCase()) > -1;


          // item.zip.toLowerCase() == this.searchKey.toLowerCase();      
          return filtlist;
        }.bind(this));
      return _.orderBy(list, this.sortBy, this.sortOrder);
    },
    toggleSortOrder: function () {
      if (this.sortOrder == 'asc') {
        return 'desc'
      }
      return 'asc'
    }
  },
  methods: {
    columnSort: function (sortBy, sortOrder, item) {
      var elem = document.getElementById(item);

      this.sortBy = sortBy;
      this.sortOrder = sortOrder;

      var elems = document.querySelectorAll("th");
      [].forEach.call(elems, function (el) {
        el.classList.remove("descending");
        el.classList.remove("ascending");
      });
      if (this.sortOrder == 'desc') {
        elem.className = 'descending';
      } else {
        elem.className = 'ascending';
      }
    }
  },
})

var app = new Vue({
  el: '#v-for-object',
  data: {
    items: [
      {
        memberNum: '1035',
        orgType: 'Barber Shop',
        name: 'Magnificent Cutz',
        mission: 'Provide the best cuts!',
        contact: 'John Bishop',
        gender: 'M',
        address: '123 Main St.',
        city: 'Decatur',
        state: 'GA',
        zip: 30044,
        country: 'USA',
        phoneNum: '404-000-2355',
        email: 'johnb@gmail.com',
        website: 'magnificentcutz.com'
      },
      {
        memberNum: '2801',
        orgType: 'School',
        name: 'The Academy',
        mission: 'Educate the youth.',
        contact: 'Donda West',
        gender: 'F',
        address: '456 West Ave.',
        city: 'Atlanta',
        state: 'GA',
        zip: '34345',
        country: 'UNIA',
        phoneNum: '678-297-8345',
        email: 'admin@theacademy.edu',
        website: 'theacademy.edu'
      }
    ]
  }
});
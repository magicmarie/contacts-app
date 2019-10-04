<template>
  <div>
      <h1>Contacts</h1>
        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2">
            <router-link :to="{ name: 'create' }" class="btn btn-primary">Create Contact</router-link>
          </div>
        </div><br />

        <table class="table table-hover">
            <thead>
            <tr>
              <th>Name</th>
              <th>Number</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="contact in contacts" :key="contact._id">
                  <td>{{ contact.name }}</td>
                  <td>{{ contact.number }}</td>
                  <td><router-link :to="{name: 'edit', params: { id: contact._id }}" class="btn btn-primary">Edit</router-link></td>
                  <td><button class="btn btn-danger" @click.prevent="deleteContact(contact._id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
  export default {
      data() {
        return {
          contacts: []
        }
      },
      created() {
      let uri = 'http://localhost:4000/contacts';
      this.axios.get(uri).then(response => {
        this.contacts = response.data;
      });
    },

    methods: {
      deleteContact(id)
      {
        let uri = `http://localhost:4000/contacts/delete/${id}`;
        this.axios.delete(uri).then(response => {
          this.contacts.splice(this.contacts.indexOf(id), 1);
        });
      }
    }
  }
</script>

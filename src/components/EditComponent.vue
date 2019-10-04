<template>
  <div>
    <h1>Edit Contact</h1>
    <form @submit.prevent="updateContact">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Contact Name:</label>
            <input type="text" class="form-control" v-model="contact.name" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Number:</label>
            <input class="form-control" v-model="contact.number" rows="5"/>
          </div>
        </div>
      </div>
      <br />
      <div class="form-group">
        <button class="btn btn-primary">Update</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contact: {}
    };
  },
  created() {
    let uri = `http://localhost:4000/contacts/edit/${this.$route.params.id}`;
    this.axios.get(uri).then(response => {
      this.contact = response.data;
    });
  },
  methods: {
    updateContact() {
      let uri = `http://localhost:4000/contacts/update/${this.$route.params.id}`;
      this.axios.post(uri, this.contact).then(() => {
        this.$router.push({ name: "contacts" });
      });
    }
  }
};
</script>

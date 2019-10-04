<template>
  <div>
    <h1>Create A Contact</h1>
    <form @submit.prevent="addContact">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Contact Name:</label>
            <input type="text" class="form-control" v-model="contact.name"/>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Number:</label>
            <input type="number" class="form-control" v-model="contact.number" />
          </div>
        </div>
      </div>
      <br />
      <div class="form-group">
        <button class="btn btn-primary">Create</button>
      </div>
    </form>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      contact: {
        name: "",
        number: ""
      },
      submitStatus: null
    };
  },
  validations: {
    contact: {
      name: {
        required,
        minLength: minLength(5)
      },
      number: {
        required,
        minLength: minLength(10)
      }
    }
  },
  methods: {
    addContact() {
      this.submitted = true;
      let uri = "http://localhost:4000/contacts/add";
      this.axios.post(uri, this.contact).then(() => {
        this.$router.push({ name: "contacts" });
      });
    }
  }
};
</script>

<template>
  <Vueform
    :schema="formSchema"
    :submit-attrs="{
      'class': 'query-form-button'
    }"
    @submit="handleSubmit"
    ref="vueform"
    class="query-form"
  >
  </Vueform>
</template>

<script setup>
import { ref } from 'vue';
import emailjs from '@emailjs/browser';
import { Vueform } from '@vueform/vueform';

const vueform = ref(null);

const formSchema = ref({
  name: {
    type: 'text',
    label: 'Name:',
    placeholder: 'Your Name',
    rules: 'required',
  },
  email: {
    type: 'email',
    label: 'Email:',
    placeholder: 'Your Email',
    rules: 'required|email',
  },
  services: {
    type: 'checkboxes',
    label: 'Services Interested In:',
    options: [
      { value: 'personalised_training_plan', label: 'Personalised Training Plan' },
      { value: 'nutritional_plan', label: 'Nutritional Plan' },
      { value: 'personal_training_sessions', label: 'Personal Training Sessions' },
      { value: 'general_enquiry', label: 'General Enquiry' },
    ],
    rules: 'required',
  },
  message: {
    type: 'textarea',
    label: 'Message:',
    rows: 4,
    placeholder: 'Your Message',
    rules: 'required',
  },
  submitButton: {
    type: 'button',
    buttonType: 'submit',
    label: 'Send Message',
    fullWidth: true,
  },
});

const handleSubmit = async (form$) => {
  const formElement = vueform.value.$el;

  try {
    await emailjs.sendForm('service_iswqmqe', 'template_sgfyded', formElement, {
      publicKey: 'YNexT8O1rsZO9dyTq',
    });
    console.log('FORM SUBMITTED!');
    form$.reset();
  } catch (error) {
    console.log('FAILED...', error.text);
  }
};
</script>

<style scoped>
.query-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: var(--background-color);
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.query-form label {
  display: block;
  margin-top: 10px;
  color: var(--text-primary);
  font-family: var(--font-primary);
}

.query-form input,
.query-form textarea {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid var(--secondary-color);
  border-radius: 5px;
  box-sizing: border-box;
  font-family: var(--font-primary);
  color: var(--background-color);
  background-color: #fff;
}

.query-form input:focus,
.query-form textarea:focus {
  border-color: var(--primary-color);
  outline: none;
  box-shadow: 0 0 4px rgba(42, 157, 143, 0.5);
}

.query-form-button {
  width: 100%;
  padding: 10px;
  margin-top: 15px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: var(--font-primary);
  transition: background-color 0.3s ease;
}

.query-form-button:hover {
  background-color: var(--accent-color);
}
</style>
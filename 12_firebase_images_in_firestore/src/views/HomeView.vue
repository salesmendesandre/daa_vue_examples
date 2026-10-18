<template>
  <div class="grid gap-3">
    <div class="col-12">
      <Card class="shadow-1">
        <template #content>
          <ImageUploader />
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
const toast = useToast();

const show = () => {
    toast.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3000 });
};
</script>
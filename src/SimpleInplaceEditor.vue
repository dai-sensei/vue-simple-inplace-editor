<template>
  <div
    v-if="isEdit"
    class="simple-inplace-editor flex"
  >
    <div class="input-text">
      <input type="text" class="text-box">
    </div>
    <a
      class="button"
      @click="confirm"
    >
      <font-awesome-icon
        icon="check"
        :style="{ color: confirmIconColor }"
      />
    </a>
    <a
      class="button"
      @click="cancel"
    >
      <font-awesome-icon
        icon="times"
        :style="{ color: cancelIconColor }"
      />
    </a>
  </div>
  <div
    v-if="!isEdit"
    class="simple-inplace-editor flex"
  >
    <div class="value">
      {{ innerValue }}
    </div>
    <a
      class="button"
      @click="changeEditMode"
    >
      <font-awesome-icon
        icon="pen"
        :style="{ color: editIconColor }"
      />
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';

export default defineComponent({
  props: {
    value: {
      type: String,
      default: ''
    },
    confirmIconColor: {
      type: String,
      default: '#69b076'
    },
    editIconColor: {
      type: String,
      default: '#1877f2'
    },
    cancelIconColor: {
      type: String,
      default: '#000000'
    }
  },
  emits: ['update:value'],
  setup(props, context) {
    const isEdit = ref(false);
    const innerValue = computed<string>({
      get() {
        return props.value;
      },
      set(inputValue) {
        context.emit('update:value', inputValue);
      }
    });
    const backupValue = ref<string>('');

    function changeEditMode() {
      backupValue.value = innerValue.value;
      isEdit.value = true;
    }

    function confirm() {
      isEdit.value = false;
    }

    function cancel() {
      innerValue.value = backupValue.value;
      isEdit.value = false;
    }

    return {
      isEdit,
      innerValue,
      changeEditMode,
      confirm,
      cancel
    };
  },
});
</script>

<style lang="scss" scoped>
.simple-inplace-editor {
  min-height: 20px;
}
.value {
  min-width: 200px;
  border-bottom: solid 1px #000000;
  flex-grow:1;
}
.input-text {
  flex-grow:1;
  margin-right: 5px;
}
.text-box {
  min-height: 20px;
  min-width: 200px;
  width: 100%;
}
.flex {
  display: flex;
}
.button {
  background:none;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius:100%;
  height: 25px;
  width: 25px;
  text-align: center;
  padding: 2px;
  margin-left: 10px;
}
.button:hover {
  background: #efefef;
}
</style>

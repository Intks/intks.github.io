<template>
  <div :class="[
    type === 'textarea' ? 'alex-textarea' : 'alex-input'
  ]"
       @mouseenter="hovering = true"
       @mouseleave="hovering = false">

    <template v-if="type !== 'textarea'">
      <!-- 前置内容 -->
      <span class="alex-input__prefix"
            v-if="$slots.prefix">
        <slot name="prefix"></slot>
      </span>
      <input type="text"
             class="alex-input__inner"
             :class="{'alex-input__inner-prefix': $slots.prefix, 'alex-input__inner-editable': !disabled, 'alex-input__inner-disabled': disabled}"
             :disabled="disabled"
             :readonly="readonly"
             :value="value"
             @input="handleInput"
             @change="handleChange"
             @focus="handleFocus"
             @blur="handleBlur">

    </template>

    <template v-else>
      <textarea class="alex-textarea__inner"
                :class="{'alex-textarea__inner-editable': !disabled, 'alex-textarea__inner-disabled': disabled}"
                :disabled="disabled"
                :readonly="readonly"
                :value="value"
                @input="handleInput"
                @change="handleChange"
                @focus="handleFocus"
                @blur="handleBlur">
      </textarea>
    </template>
  </div>
</template>

<script>
export default {
  name: 'AlexInput',
  props: {
    type: {
      type: String,
      default: 'input'
    },
    value: [String, Number],
    disabled: Boolean,
    readonly: Boolean
  },
  data () {
    return {
      hovering: false
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    handleChange (e) {
      this.$emit('change', e.target.value)
    },
    handleFocus (e) {
      this.focused = true
      this.$emit('focus', e)
    },
    handleBlur (e) {
      this.focused = false
      this.$emit('focus', e)
    }
  }
}
</script>

<style lang="scss" scoped>
.alex-input,
.alex-textarea {
  position: relative;

  &__prefix {
    position: absolute;
    top: 50%;
    left: 8px;
    transform: translateY(-50%);
    font-size: 12px;
  }
  &__inner {
    border: 1px solid #eee;
    border-radius: 8px;
    font-size: 14px;
    outline: none;
    &-editable {
      &:hover,
      &:focus {
        color: #222;
        border-color: #409eff;
        background-color: #fff;
      }

      &:active {
        color: #222;
        border-color: #409eff;
        outline: none;
      }
    }
    &-disabled {
      cursor: not-allowed;
      background-color: #eee;
      resize: none;
    }
  }
}

.alex-input {
  &__inner {
    padding: 12px 24px;
  }
}

.alex-textarea {
  &__inner {
    padding: 8px 12px;
  }
}
</style>

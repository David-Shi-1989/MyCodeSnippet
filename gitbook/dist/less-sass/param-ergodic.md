# 循环遍历赋值



## SCSS

```less
$color: (
  primary: $color-primay,
  light-primary: $color-light-primay,
  success: $color-success,
  info: $color-info,
  warning: $color-warning,
  error: $color-error,
  text-title: $color-text-title,
  text-content: $color-text-content,
  text-subColor: $color-text-subColor,
  text-disabled: $color-text-disabled,
  border: $color-border,
  divider: $color-divider,
  background: $color-background
);

html {
  @each $key, $val in $color {
    --color-#{$key}: #{$val};
  }
}
```



## LESS

```scss
@color: {
  primary: #2d8cf0;
  title: #17233d;
  content: #515a6e;
  sub-color: #808695;
  disabled: #c5c8ce;
  border: #dcdee2;
  divider: #e8eaec;
  background: #f8f8f9;
  warning: #ff9900;
};

html {
  each(@color, {
    --color-@{key}: @value;
  });
}
```


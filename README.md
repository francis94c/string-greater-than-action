# string-greater-than-action

This action checks that `string1` is greater than, equal to, or less than `string2`.

## Inputs

### `string1`

**Required** String 1.

### `string2`

**Required** String 2.

### `failOnGreater`

Whether step should fail if `string1` > `string2`.

### `failOnLesser`

Whether step should fail if `string1` < `string2`.

### `failOnEqual`

Whether step should fail if `string1` = `string2`.

## Outputs

### `result`

`0` if `string1` = `string2`; `1` if `string1` > `string1`; `-1` if `string1` < `string2`.

## Example Usage

```yaml
name: Version compare
uses: francis94c/string-greater-than-action@v1
id: v-compare
with:
  string1: v1.0.0+1
  string2: v1.0.5+4
  .
  .
  .
name: Version Compare Result
run: echo ${{ steps.v-compare.outputs.result}}
```

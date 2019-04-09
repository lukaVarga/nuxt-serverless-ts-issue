// tslint:disable:quotemark
export default {
  validations: {
    messages: {
      _default: 'Value for this field is not valid.',
      after: (_field: string, [target, inclusion]: string[]): string =>
        `The date must be after ${inclusion ? 'or equal to ' : ''}${target}.`,
      alpha: 'This field may only contain alphabetic characters.',
      alpha_dash: 'This field may contain alpha-numeric characters as well as dashes and underscores.',
      alpha_num: 'This field may only contain alpha-numeric characters.',
      alpha_spaces: 'This field may only contain alphabetic characters as well as spaces.',
      before: (_field: string, [target, inclusion]: string[]): string =>
        `The date must be before ${inclusion ? 'or equal to ' : ''}${target}.`,
      between: (_field: string, [min, max]: number[]): string => `This field must be between ${min} and ${max}.`,
      confirmed: 'The confirmation does not match.',
      credit_card: 'This credit card number is invalid.',
      credit_card_cvc: 'The security code is invalid.',
      credit_card_expiry: 'The expiry date is invalid.',
      credit_card_number: 'This credit card number is invalid.',
      date_between: (_field: string, [min, max]: string[]): string => `The date must be between ${min} and ${max}.`,
      date_format: (_field: string, [format]: string[]): string => `This date must be in the format ${format}.`,
      decimal: (_field: string, [decimals = '*']: string[] = []): string =>
        `This field must be numeric and may contain ${!decimals || decimals === '*' ? '' : decimals} decimal points.`,
      digits: (_field: string, [length]: number[]): string =>
        `This field must be numeric and exactly contain ${length} digits.`,
      dimensions: (_field: string, [width, height]: number[]): string =>
        `The image size must be ${width} pixels by ${height} pixels.`,
      email: 'This is not a valid email address.',
      excluded: 'This is not a valid value.',
      ext: 'This file is invalid.',
      image: 'The selected file must be an image.',
      included: 'This is not a valid value.',
      integer: 'This field must be an integer.',
      ip: 'This field must be a valid ip address.',
      ip_or_fqdn: `This field must be a valid ip address or FQDN.`,
      length: (_field: string, [length, max]: number[]): string => {
        if (max) {
          return `Length must be between ${length} and ${max}.`;
        }

        return `Length must be ${length}.`;
      },
      max: (_field: string, [length]: number[]): string => `This field may not be greater than ${length} characters.`,
      max_value: (_field: string, [max]: number[]): string => `This field must be ${max} or less.`,
      mimes: 'This field must have a valid file type.',
      min: (_field: string, [length]: number[]): string => `This field must be at least ${length} characters.`,
      min_value: (_field: string, [min]: number[]): string => `This field must be ${min} or more.`,
      numeric: 'This field may only contain numeric characters.',
      regex: 'This field format is invalid.',
      required: 'This field is required.',
      required_if: (_field: string, [target]: string[]): string =>
        `This field is required when the ${target} field has this value.`,
      url: `This field is not a valid URL.`,
    },
  },
};
// tslint:enable:quotemark

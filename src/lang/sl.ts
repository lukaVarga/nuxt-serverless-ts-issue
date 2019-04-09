// tslint:disable:quotemark
export default {
  validations: {
    messages: {
      _default: 'Polje ni veljavno.',
      after: (_field: string, [target, inclusion]: string[]): string =>
        `Datum mora biti po ${inclusion ? 'ali enak ' : ''}${target}.`,
      alpha: 'Polje lahko vsebuje le črkovne znake.',
      alpha_dash: 'Polje lahko vsebuje le alfanumerične znake, vezaje in podčrtaje.',
      alpha_num: 'Polje lahko vsebuje le alfanumerične znake.',
      alpha_spaces: 'Polje lahko vsebuje le črkovne znake in presledke.',
      before: (_field: string, [target, inclusion]: string[]): string =>
        `Datum mora biti pred ${inclusion ? 'ali na ' : ''}${target}.`,
      between: (_field: string, [min, max]: number[]): string => `Polje mora biti med ${min} in ${max}.`,
      confirmed: 'Polje se ne ujema.',
      credit_card: 'Številka kreditne kartice ni veljavna.',
      credit_card_cvc: 'Varnostna koda je neveljavna.',
      credit_card_expiry: 'Datum veljavnosti je neveljaven.',
      credit_card_number: 'Številka kreditne kartice ni veljavna.',
      date_between: (_field: string, [min, max]: string[]): string => `Datum mora biti med ${min} in ${max}.`,
      date_format: (_field: string, [format]: string[]): string => `Datum mora biti formata ${format}.`,
      decimal: (_field: string, [decimals = '*']: string[] = []): string =>
        `Polje mora biti numerično, maksimalno število decimalnih mest je ${
          !decimals || decimals === '*' ? '' : decimals
        }.`,
      digits: (_field: string, [length]: number[]): string =>
        `Polje mora biti numerično, točno število števk katere mora vsebovati pa je ${length}.`,
      dimensions: (_field: string, [width, height]: number[]): string =>
        `Slika mora biti široka ${width} slikovnih točk in visoka ${height} slikovnih točk.`,
      email: 'Email naslov ni veljaven.',
      excluded: 'Polje ni ustrezne vrednosti.',
      ext: 'Datoteka ni ustrezna.',
      image: 'Izbrana datoteka mora biti slika.',
      included: 'Polje ni ustrezne vrednosti.',
      integer: 'Polje mora biti celo število.',
      ip: 'Polje ni veljaven IP naslov.',
      ip_or_fqdn: `Polje mora biti veljaven IP naslov ali FQDN.`,
      length: (_field: string, [length, max]: number[]): string => {
        if (max) {
          return `Dolžina polja mora biti med ${length} in ${max}.`;
        }

        return `Dolžina polja mora biti ${length}.`;
      },
      max: (_field: string, [length]: number[]): string => `Dolžina polja ne sme biti večja od ${length} znakov.`,
      max_value: (_field: string, [max]: number[]): string => `Vrednost polja mora biti ${max} ali manj.`,
      mimes: 'Tip datoteke ni ustrezen.',
      min: (_field: string, [length]: number[]): string => `Dolžina polja mora biti vsaj ${length} znakov.`,
      min_value: (_field: string, [min]: number[]): string => `Vrednost polja mora biti ${min} ali več.`,
      numeric: 'Polje lahko vsebuje le numerične znake.',
      regex: 'Vrednost polja ni v ustreznem formatu.',
      required: 'Polje je obvezno.',
      required_if: (_field: string, [target]: string[]): string =>
        `Polje je obvezno, kadar ima polje ${target} takšno vrednost.`,
      url: `Vrednost polja ni veljaven URL naslov.`,
    },
  },
};
// tslint:enable:quotemark

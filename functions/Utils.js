

export function formatCurrency(value, currency, locale) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

export function getNomeDiaSemana(dia) {
  switch (dia) {
    case 0:
      return 'Domingo';
      break;
    case 1:
      return 'Segunda-feira';
      break;
    case 2:
      return 'Terça-feira';
      break;
    case 3:
      return 'Quarta-feira';
      break;
    case 4:
      return 'Quinta-feira';
      break;
    case 5:
      return 'Sexta-feira';
      break;
    case 6:
      return 'Sábado';
      break;
    default:
      return 'Not Defined';

  }
}

export function NumMesToNome(dia) {
  switch (dia) {
    case 0:
      return 'Janeiro';

    case 1:
      return 'Fevereiro';

    case 2:
      return 'Março';
      break;
    case 3:
      return 'Abril';
      break;
    case 4:
      return 'Maio';
      break;
    case 5:
      return 'Junho';
      break;
    case 6:
      return 'Julho';
      break;
    case 7:
      return 'Agosto';
      break;
    case 8:
      return 'Setembro';
      break;
    case 9:
      return 'Outubro';
      break;
    case 10:
      return 'Novembro';
      break;
    case 11:
      return 'Dezembro';
      break;
    default:
      return 'Not Defined';

  }
}

export function NomeMesToNum(mes) {
  switch (mes) {
    case "Janeiro":
      return 0;
    case "Fevereiro":
      return 1;
    case "Março":
      return 2;
    case "Abril":
      return 3;
    case "Maio":
      return 4;
    case "Junho":
      return 5;
    case "Julho":
      return 6;
    case "Agosto":
      return 7;
    case "Setembro":
      return 8;
    case "Outubro":
      return 9;
    case "Novembro":
      return 10;
    case "Dezembro":
      return 11;
    default:
      return 0;

  }
}
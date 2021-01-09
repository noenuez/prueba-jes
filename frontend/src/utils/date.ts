import moment from 'moment';

export class DateParser {
  static toISOString(date: Date) {
    return moment(date).toISOString();
  }

  static toString(date: Date) {
    return moment(date).format(this.dateFormatMoment);
  }

  static readonly dateFormatMoment = 'DD/MM/yyyy';
  static readonly dateFormat = 'dd/MM/yyyy';
}
export default DateParser;

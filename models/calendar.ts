export interface FormattedDate {
  id: string;
  value: string;
}

export interface AvailableTime {
  _id?: string;
  start: string;
  end: string;
  date: string;
}

export interface BookedTime {
  _id?: string;
  start: string;
  end: string;
  date: string;
  name: string;
  email: string;
  type: 'cefr' | 'conversation' | 'business' | '';
}

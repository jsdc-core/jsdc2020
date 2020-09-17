import { Speaker } from '../speaker/types';

export interface Agenda {
  time: string;
  title: string;
  speaker?: Speaker;
  description?: string;
  slide?: string;
}

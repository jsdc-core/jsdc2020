import { Speaker } from '../speaker/types';

export interface Agenda {
  time: string;
  title: string;
  speaker?: Speaker;
  multiSpeaker?: string;
  description?: string;
  slide?: string;
}

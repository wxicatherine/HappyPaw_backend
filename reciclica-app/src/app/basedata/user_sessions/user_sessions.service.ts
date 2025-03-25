
import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../../../config/supabase.service';

@Injectable()
export class UserSessionsService {
  constructor(private readonly supabaseService: SupabaseService) {}

  async findAll() {
    const { data, error } = await this.supabaseService.getClient()
      .from('user_sessions')
      .select('*');
    if (error) throw error;
    return data;
  }

  async findOne(id: string) {
    const { data, error } = await this.supabaseService.getClient()
      .from('user_sessions')
      .select('*')
      .eq('user_session_id', id)
      .single();
    if (error) throw error;
    return data;
  }

  async create(data: any) {
    const { data: newEntry, error } = await this.supabaseService.getClient()
      .from('user_sessions')
      .insert([data])
      .select()
      .single();
    if (error) throw error;
    return newEntry;
  }

  async remove(id: string) {
    const { error } = await this.supabaseService.getClient()
      .from('user_sessions')
      .delete()
      .eq('user_session_id', id);
    if (error) throw error;
    return { message: 'Deleted successfully' };
  }
}

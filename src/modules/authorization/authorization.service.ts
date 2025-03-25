
import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../../../config/supabase.service';

@Injectable()
export class AuthorizationService {
  constructor(private readonly supabaseService: SupabaseService) {}

  async findAll() {
    const { data, error } = await this.supabaseService.getClient()
      .from('authorization')
      .select('*');
    if (error) throw error;
    return data;
  }

  async findOne(id: string) {
    const { data, error } = await this.supabaseService.getClient()
      .from('authorization')
      .select('*')
      .eq('authorization_id', id)
      .single();
    if (error) throw error;
    return data;
  }

  async create(data: any) {
    const { data: newEntry, error } = await this.supabaseService.getClient()
      .from('authorization')
      .insert([data])
      .select()
      .single();
    if (error) throw error;
    return newEntry;
  }

  async remove(id: string) {
    const { error } = await this.supabaseService.getClient()
      .from('authorization')
      .delete()
      .eq('authorization_id', id);
    if (error) throw error;
    return { message: 'Deleted successfully' };
  }
}


import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../../../config/supabase.service';

@Injectable()
export class ShelterService {
  constructor(private readonly supabaseService: SupabaseService) {}

  async findAll() {
    const { data, error } = await this.supabaseService.getClient().from('shelter').select('*');
    if (error) throw error;
    return data;
  }

  async findOne(id: string) {
    const { data, error } = await this.supabaseService.getClient()
      .from('shelter')
      .select('*')
      .eq('shelter_id', id)
      .single();
    if (error) throw error;
    return data;
  }

  async create(data: any) {
    const { data: newEntry, error } = await this.supabaseService.getClient()
      .from('shelter')
      .insert([data])
      .select()
      .single();
    if (error) throw error;
    return newEntry;
  }

  async remove(id: string) {
    const { error } = await this.supabaseService.getClient().from('shelter').delete().eq('shelter_id', id);
    if (error) throw error;
    return { message: 'Deleted successfully' };
  }
}

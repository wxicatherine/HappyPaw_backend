
import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../../../config/supabase.service';

@Injectable()
export class DonationService {
  constructor(private readonly supabaseService: SupabaseService) {}

  async findAll() {
    const { data, error } = await this.supabaseService.getClient().from('donation').select('*');
    if (error) throw error;
    return data;
  }

  async findOne(id: string) {
    const { data, error } = await this.supabaseService.getClient()
      .from('donation')
      .select('*')
      .eq('donation_id', id)
      .single();
    if (error) throw error;
    return data;
  }

  async create(data: any) {
    const { data: newEntry, error } = await this.supabaseService.getClient()
      .from('donation')
      .insert([data])
      .select()
      .single();
    if (error) throw error;
    return newEntry;
  }

  async remove(id: string) {
    const { error } = await this.supabaseService.getClient().from('donation').delete().eq('donation_id', id);
    if (error) throw error;
    return { message: 'Deleted successfully' };
  }
}

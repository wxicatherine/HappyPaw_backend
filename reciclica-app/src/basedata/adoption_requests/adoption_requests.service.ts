//adoption_requests.service.ts
import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../../../config/supabase.service';

@Injectable()
export class AdoptionRequestsService {
  constructor(private readonly supabaseService: SupabaseService) {}

  async findAll() {
    const { data, error } = await this.supabaseService.getClient()
      .from('adoption_requests')
      .select('*');

    if (error) throw error;
    return data;
  }

  async findOne(id: string) {
    const { data, error } = await this.supabaseService.getClient()
      .from('adoption_requests')
      .select('*')
      .eq('adoption_id', id)
      .single();

    if (error) throw error;
    return data;
  }

  async create(data: { volunteer_id: string; shelter_id: string; animal_id: string; status: string }) {
    const { data: newEntry, error } = await this.supabaseService.getClient()
      .from('adoption_requests')
      .insert([
        {
          
          volunteer_id: data.volunteer_id,
          shelter_id: data.shelter_id,
          animal_id: data.animal_id,
          status: data.status,
          request_date: new Date(),
        },
      ])
      .select()
      .single();

    if (error) throw error;
    return newEntry;
  }

  async remove(id: string) {
    const { error } = await this.supabaseService.getClient()
      .from('adoption_requests')
      .delete()
      .eq('adoption_id', id);

    if (error) throw error;
    return { message: 'Deleted successfully' };
  }
}

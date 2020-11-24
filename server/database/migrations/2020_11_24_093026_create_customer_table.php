<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomerTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customer', function (Blueprint $table) {
            $table->char('id', 36);
            $table->string('ref', 36);
            $table->string('name', 100);
            $table->string('address', 60);
            $table->string('address_two', 60)->nullable()->default(null);
            $table->string('town', 60);
            $table->string('county', 191)->nullable()->default(null);
            $table->string('country', 60)->nullable()->default(null);
            $table->string('postcode', 20);
            $table->string('telephone', 50)->nullable()->default(null);
            $table->string('fax', 20)->nullable()->default(null);
            $table->string('website', 191)->nullable()->default(null);
            $table->text('profile_note')->nullable()->default(null);
            $table->text('alert_text')->nullable()->default(null);
            $table->string('web_user_title', 190)->nullable()->default(null);
            $table->text('web_user_text')->nullable()->default(null);
            $table->char('account_manager_id', 36)->nullable()->default(null);
            $table->string('client_region', 100)->nullable()->default(null);
            $table->smallInteger('logo');
            $table->smallInteger('logo_proposal');
            $table->text('enquiry_note')->nullable()->default(null);
            $table->string('account_ref', 100)->nullable()->default(null);
            $table->text('feedback_note');
            $table->smallInteger('market_sector');
            $table->smallInteger('industry_category');
            $table->Integer('sla_response_hour');
            $table->Integer('sla_response_minute');
            $table->tinyInteger('show_confirmed_supplier_reason');
            $table->string('division', 100)->nullable()->default(null);
            $table->string('urn', 190)->nullable()->default(null);
            $table->string('urn_location', 190)->nullable()->default(null);
            $table->Integer('venue_response_hour');
            $table->Integer('venue_response_minute');
            $table->string('sage_code', 150)->nullable()->default(null);
            $table->string('search_term', 100)->nullable()->default(null);
            $table->string('parent_company_id', 36)->nullable()->default(null);
            $table->string('customer_company_id', 36)->nullable()->default(null);
            $table->string('child_company_id', 36)->nullable()->default(null);
            $table->string('shared_ownership_id', 36)->nullable()->default(null);
            $table->char('billing_contact_id', 36)->nullable()->default(null);
            $table->tinyInteger('is_consolidated');
            $table->string('consolidated_format', 191)->nullable()->default(null);
            $table->string('region', 60)->nullable()->default(null);
            $table->string('area', 60)->nullable()->default(null);
            $table->tinyInteger('covert_booking');
            $table->tinyInteger('display_charge_tax_as');
            $table->tinyInteger('contract_reference');
            $table->datetime('contract_reference_start_date');
            $table->datetime('contract_reference_end_date');
            $table->text('billing_notice')->nullable()->default(null);
            $table->smallInteger('dinner_allowance');
            $table->text('structure_note')->nullable()->default(null);
            $table->smallInteger('pdf_creator');
            $table->smallInteger('status_colour');
            $table->tinyInteger('status');
            $table->timestamp('created_at')->nullable()->default(null);
            $table->timestamp('updated_at')->nullable()->default(null);
            $table->timestamp('deleted_at')->nullable()->default(null);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('customer');
    }
}

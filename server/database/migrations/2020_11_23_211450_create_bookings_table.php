<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBookingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('booking', function (Blueprint $table) {
            $table->char('id', 36);
            $table->char('contact_id', 36);
            $table->smallInteger('gross');
            $table->smallInteger('rate');
            $table->string('ref', 36);
            $table->string('event_name', 191);
            $table->double('budget', 8, 2)->nullable()->default(null);
            $table->string('preferred_venues', 100)->nullable()->default(null);
            $table->string('sla_response_hours', 10)->nullable()->default(null);
            $table->string('sla_response_minutes', 10)->nullable()->default(null);
            $table->datetime('sla_due')->nullable()->default(null);
            $table->string('location', 191)->nullable()->default(null);
            $table->string('end_client_name', 191)->nullable()->default(null);
            $table->integer('approx_attendees')->nullable()->default(null);
            $table->integer('attendees_day')->nullable()->default(null);
            $table->integer('attendees_overnight')->nullable()->default(null);
            $table->integer('duration')->nullable()->default(1);
            $table->datetime('primary_event_date');
            $table->string('contact_otd', 191)->nullable()->default(null);
            $table->string('exception_reason', 191)->nullable()->default(null);
            $table->string('alternative_dates', 190)->nullable()->default(null);
            $table->text('body')->nullable()->default(null);
            $table->char('owner_id', 36)->nullable()->default(null);
            $table->char('assignee_id', 36)->nullable()->default(null);
            $table->smallInteger('reconciliation_status')->nullable()->default(null);
            $table->char('customer_id', 36)->nullable()->default(null);
            $table->string('contact_email', 191)->nullable()->default(null);
            $table->smallInteger('contract')->nullable()->default(null);
            $table->smallInteger('reason_for_event')->nullable()->default(null);
            $table->smallInteger('event_type')->nullable()->default(null);
            $table->string('type', 50);
            $table->datetime('departure_date')->nullable()->default(null);
            $table->smallInteger('disabled_access_level')->nullable()->default(null);
            $table->smallInteger('source')->nullable()->default(null);
            $table->char('consultant_id', 36)->nullable()->default(null);
            $table->char('account_manager_id', 36)->nullable()->default(null);
            $table->smallInteger('billing_method')->nullable()->default(null);
            $table->text('customer_note')->nullable()->default(null);
            $table->text('billing_note')->nullable()->default(null);
            $table->text('venue_note')->nullable()->default(null);
            $table->string('telephone', 191)->nullable()->default(null);
            $table->string('mobile', 191)->nullable()->default(null);
            $table->smallInteger('phone_preference')->nullable()->default(null);
            $table->char('billing_address_id', 36)->nullable()->default(null);
            $table->smallInteger('customer_survey')->nullable()->default(null);
            $table->text('agent_comments')->nullable()->default(null);
            $table->text('fields')->nullable()->default(null);
            $table->tinyInteger('status')->nullable()->default(null);
            $table->timestamp('created_at')->nullable()->default(null);
            $table->timestamp('updated_at')->nullable()->default(null);
            $table->timestamp('deleted_at')->nullable()->default(null);
            $table->char('office_reference', 60);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('booking');
    }
}

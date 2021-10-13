// var parameter_data & var switch_parameter_data contains the data describing the parameters of the LCA model 
var parameter_data = {'name': {0: 'bc_C_7', 1: 'wls_LHV_bio_dry', 2: 'wls_w', 3: 'wls_w_d', 4: 'wls_h_d', 5: 'wls_e_d', 6: 'wls_r_d', 7: 'wls_LHV_bc_dry', 8: 'wls_y_bc', 9: 'wls_i_el', 10: 'wls_eta_h', 11: 'wls_q_w', 12: 'wls_i_f', 13: 'wls_i_elp', 14: 'dist2bio_lr', 15: 'dist2bio_wl', 16: 'dist2proc', 17: 'mrg_fuel', 18: 'mrg_el', 19: 'mrg_heat'}, 'amount': {0: 0.816, 1: 18.4, 2: 0.5, 3: 0.1, 4: 2.85, 5: 0.05, 6: 0, 7: 29.6, 8: 0.25, 9: 0, 10: 0.85, 11: 1.6, 12: 0.0027, 13: 0.182, 14: 150, 15: 50, 16: 5, 17: 'biofuel-diesel', 18: 'SE average', 19: 'forest'}, 'group': {0: '', 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '', 10: '', 11: '', 12: '', 13: '', 14: '', 15: '', 16: '', 17: '', 18: '', 19: ''}, 'label': {0: '', 1: '', 2: '', 3: '', 4: '', 5: '', 6: '', 7: '', 8: '', 9: '', 10: '', 11: '', 12: '', 13: '', 14: '', 15: '', 16: '', 17: '', 18: '', 19: ''}, 'description': {0: 'Biochar carbon content, measured as % of dry matter.', 1: 'Lower heating value of the biomass, dry', 2: 'Moisture content of the biomass as received', 3: 'Target moisture content after drying', 4: 'Specific heat for drying machine', 5: 'Electricity during drying, for fans and co', 6: 'Fraction of drying heat recovered as district heat', 7: 'Lower heating value of the biochar, dry', 8: 'Biochar yield, dry to dry mass', 9: 'Electricity input to for pyrolysis heating', 10: 'Boiler heat efficiency, as percent enthalpy of syngas', 11: 'Quenching water', 12: 'Start-up LPG fuel', 13: 'Electricity input for pyrolysis operation', 14: 'Transport distance, logging residues to site', 15: 'Transport distance, willow to site', 16: 'Distance for transport of intermediary products between processing steps', 17: 'Switch parameter for mrg_fuel', 18: 'Switch parameter for mrg_el', 19: 'Switch parameter for mrg_heat'}, 'uncertainty type': {0: 4, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 1, 8: 1, 9: 1, 10: 1, 11: 1, 12: 1, 13: 1, 14: 4, 15: 4, 16: 1, 17: 'switch', 18: 'switch', 19: 'switch'}, 'minimum': {0: 0.5, 1: 16.0, 2: 0.0, 3: 0.0, 4: 1.5, 5: 0.0, 6: 0.0, 7: 25.0, 8: 0.1, 9: 0.0, 10: 0.0, 11: 0.0, 12: 0.0, 13: 0.0, 14: 0.0, 15: 0.0, 16: 0.0, 17: 0.0, 18: 0.0, 19: 0.0}, 'maximum': {0: 1.0, 1: 20.0, 2: 1.0, 3: 1.0, 4: 3.5, 5: 0.15, 6: 1.0, 7: 35.0, 8: 0.35, 9: 5.0, 10: 1.0, 11: 5.0, 12: 0.01, 13: 0.4, 14: 2000.0, 15: 2000.0, 16: 2000.0, 17: 1.0, 18: 1.0, 19: 1.0}, 'loc': {0: 0.816, 1: 18.4, 2: 0.5, 3: 0.1, 4: 2.85, 5: 0.05, 6: 0.0, 7: 29.6, 8: 0.25, 9: 0.0, 10: 0.85, 11: 1.6, 12: 0.0027, 13: 0.182, 14: 150.0, 15: 50.0, 16: 5.0, 17: '', 18: '', 19: ''}, 'prettyName': {0: 'Willow biochar carbon content', 1: 'Willow LHV', 2: 'Willow moisture, pre drying', 3: 'Willow moisture, post drying', 4: 'Drying specific heat', 5: 'Drying electricity input', 6: 'Drying heat recovery', 7: 'Biochar LHV', 8: 'Biochar yield', 9: 'Electricity input for pyrolysis heating', 10: 'Pyrolysis energy efficiency', 11: 'Quenching water used', 12: 'Start-up LPG fuel', 13: 'Electricity input for pyrolysis operation', 14: 'Transport distance, logging residues to site', 15: 'Transport distance, willow to site', 16: 'Transport distance, biochar to market', 17: 'Transport fuel type', 18: 'Electricity type', 19: 'Heat type'}, 'unit': {0: '%', 1: 'MJ/kg', 2: '%', 3: '%', 4: 'MJ/kg water', 5: 'kWh/kg water', 6: '%', 7: 'MJ/kg', 8: '%', 9: 'kWh/kg biochar', 10: '%', 11: 'kg water/kg biochar', 12: 'kg LPG/kg biochar', 13: 'kWh/kg biochar', 14: 'km', 15: 'km', 16: 'km', 17: '', 18: '', 19: ''}}; 
var switch_parameter_data = {'mrg_fuel': {'options': ['biofuel-diesel', 'diesel'], 'values': [[0, 1], [1, 0]]}, 'mrg_el': {'options': ['SE average', 'SE csq', 'natural gas'], 'values': [[0, 1, 1], [1, 0, 1], [1, 1, 0]]}, 'mrg_heat': {'options': ['forest', 'fuel oil', 'natural gas'], 'values': [[0, 1, 1], [1, 0, 1], [1, 1, 0]]}}; 
// Definition of the javacsript parameters, and set to default values 
var mrg_fuel_2 = 0.0; var bc_C_7 = 0.816; var wls_LHV_bio_dry = 18.4; var wls_w = 0.5; var wls_w_d = 0.1; var wls_h_d = 2.85; var wls_e_d = 0.05; var wls_r_d = 0.0; var wls_LHV_bc_dry = 29.6; var wls_y_bc = 0.25; var wls_i_el = 0.0; var wls_eta_h = 0.85; var wls_q_w = 1.6; var wls_i_f = 0.0027; var wls_i_elp = 0.182; var dist2bio_lr = 150.0; var dist2bio_wl = 50.0; var mrg_el_1 = 0.0; var mrg_el_2 = 1.0; var mrg_el_3 = 1.0; var mrg_heat_1 = 0.0; var mrg_heat_2 = 1.0; var mrg_heat_3 = 1.0; var mrg_fuel_1 = 0.7; var dist2proc = 5.0; 
// Algebraic function for updating figure 
function algebraic_equation_f(){ 
 return {'Biomass production': [0.0998845132719977/wls_y_bc], 'Pyrolysis': [4.51202674771575e-5*mrg_el_1*mrg_el_2*wls_q_w + 0.36096213981726*mrg_el_1*mrg_el_2*(1.0*wls_e_d*(-1/(1 - wls_w_d) + 1/(1 - wls_w))/wls_y_bc + 1.0*wls_i_el + 1.0*wls_i_elp) + 2.44648043991147e-5*mrg_el_1*mrg_el_3*wls_q_w + 0.195718435192917*mrg_el_1*mrg_el_3*(1.0*wls_e_d*(-1/(1 - wls_w_d) + 1/(1 - wls_w))/wls_y_bc + 1.0*wls_i_el + 1.0*wls_i_elp) + 6.73118827264811e-6*mrg_el_2*mrg_el_3*wls_q_w + 0.0538495061811849*mrg_el_2*mrg_el_3*(1.0*wls_e_d*(-1/(1 - wls_w_d) + 1/(1 - wls_w))/wls_y_bc + 1.0*wls_i_el + 1.0*wls_i_elp) + 3.66645615565482*wls_i_f + 1.61738628413349e-5*wls_q_w + 0.0209244], 'Transport': [1.77637228753204e-5*dist2bio_lr*mrg_fuel_1*mrg_heat_2*mrg_heat_3*(-1.0*wls_eta_h*(-wls_LHV_bc_dry + wls_LHV_bio_dry/wls_y_bc + 3.6*wls_i_el) + 1.0*wls_h_d*(1 - wls_r_d)*(-1/(1 - wls_w_d) + 1/(1 - wls_w))/wls_y_bc) + 9.05038412196412e-6*dist2bio_lr*mrg_fuel_2*mrg_heat_2*mrg_heat_3*(-1.0*wls_eta_h*(-wls_LHV_bc_dry + wls_LHV_bio_dry/wls_y_bc + 3.6*wls_i_el) + 1.0*wls_h_d*(1 - wls_r_d)*(-1/(1 - wls_w_d) + 1/(1 - wls_w))/wls_y_bc) + 3.58465937675119e-6*dist2bio_lr*mrg_heat_2*mrg_heat_3*(-1.0*wls_eta_h*(-wls_LHV_bc_dry + wls_LHV_bio_dry/wls_y_bc + 3.6*wls_i_el) + 1.0*wls_h_d*(1 - wls_r_d)*(-1/(1 - wls_w_d) + 1/(1 - wls_w))/wls_y_bc) + 0.000271429794106814*dist2bio_wl*mrg_fuel_1/wls_y_bc + 0.000138289924699582*dist2bio_wl*mrg_fuel_2/wls_y_bc + 5.47736171862051e-5*dist2bio_wl/wls_y_bc + 0.000159664584768714*dist2proc*mrg_fuel_1 + 8.13470145291656e-5*dist2proc*mrg_fuel_2 + 3.22197748154147e-5*dist2proc + 0.000440105189317752*mrg_fuel_1 + 0.000232703614360319*mrg_fuel_2 + 0.000118760940322602], 'RLBU': [-0.144227188358754/wls_y_bc], 'Reactor': [0.009501017205404527], 'other': [0], 'C-sink': [-3.66666666666667*bc_C_7], 'Energy substitution': [0.00188151515379747*mrg_el_1*mrg_el_2*mrg_heat_2*mrg_heat_3*(-1.0*wls_eta_h*(-wls_LHV_bc_dry + wls_LHV_bio_dry/wls_y_bc + 3.6*wls_i_el) + 1.0*wls_h_d*(1 - wls_r_d)*(-1/(1 - wls_w_d) + 1/(1 - wls_w))/wls_y_bc) + 0.00102018234344308*mrg_el_1*mrg_el_3*mrg_heat_2*mrg_heat_3*(-1.0*wls_eta_h*(-wls_LHV_bc_dry + wls_LHV_bio_dry/wls_y_bc + 3.6*wls_i_el) + 1.0*wls_h_d*(1 - wls_r_d)*(-1/(1 - wls_w_d) + 1/(1 - wls_w))/wls_y_bc) + 0.000280690550969426*mrg_el_2*mrg_el_3*mrg_heat_2*mrg_heat_3*(-1.0*wls_eta_h*(-wls_LHV_bc_dry + wls_LHV_bio_dry/wls_y_bc + 3.6*wls_i_el) + 1.0*wls_h_d*(1 - wls_r_d)*(-1/(1 - wls_w_d) + 1/(1 - wls_w))/wls_y_bc) + 0.0689306702499272*mrg_heat_1*mrg_heat_2*(-1.0*wls_eta_h*(-wls_LHV_bc_dry + wls_LHV_bio_dry/wls_y_bc + 3.6*wls_i_el) + 1.0*wls_h_d*(1 - wls_r_d)*(-1/(1 - wls_w_d) + 1/(1 - wls_w))/wls_y_bc) + 0.093102138874223*mrg_heat_1*mrg_heat_3*(-1.0*wls_eta_h*(-wls_LHV_bc_dry + wls_LHV_bio_dry/wls_y_bc + 3.6*wls_i_el) + 1.0*wls_h_d*(1 - wls_r_d)*(-1/(1 - wls_w_d) + 1/(1 - wls_w))/wls_y_bc) + 0.008620069861582*mrg_heat_2*mrg_heat_3*(-1.0*wls_eta_h*(-wls_LHV_bc_dry + wls_LHV_bio_dry/wls_y_bc + 3.6*wls_i_el) + 1.0*wls_h_d*(1 - wls_r_d)*(-1/(1 - wls_w_d) + 1/(1 - wls_w))/wls_y_bc)]} 
}
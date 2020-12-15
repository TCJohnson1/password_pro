import React, { Component } from 'react'

export default class AddAccount extends Component {
      render() {
            return (
                  <div className="row mb-3">
                        <div className="w-50 mx-auto">
                        <form action="">
                                    <label for="colFormLabelSm" 
                                    class="col-sm-2 col-form-label col-form-label-sm">Account:</label>
                                    <div className="col-sm-10">
                                          <input type="text" 
                                          class="form-control form-control-sm" 
                                          id="colFormLabelSm" 
                                          placeholder="Account"/>
                                    </div>
                                          <label for="colFormLabelSm" 
                                          class="col-sm-2 col-form-label col-form-label-sm">Username:</label>
                                    <div className="col-sm-10">
                                          <input type="text" 
                                          class="form-control form-control-sm" 
                                          id="colFormLabelSm" 
                                          placeholder="Username"/>
                                    </div>
                                          <label for="colFormLabelSm" 
                                          class="col-sm-2 col-form-label col-form-label-sm">Email:</label>
                                    <div className="col-sm-10">
                                          <input type="email" 
                                          class="form-control form-control-sm" 
                                          id="colFormLabelSm" 
                                          placeholder="Email"/>
                                    </div>
                                          <label for="colFormLabelSm" 
                                          class="col-sm-2 col-form-label col-form-label-sm">Pasword:</label>
                                    <div className="col-sm-10">
                                          <input type="text" 
                                          class="form-control form-control-sm" 
                                          id="colFormLabelSm" 
                                          placeholder="Password"/>
                                    </div>
                                    <br/>
                                    <div class="text-center">
                                    <button type="button" class="btn btn-success btn-sm">Add Entry</button>
                                    </div>
                        </form>
                        </div>
                  </div>
            )
      }
}

                $.ajax({
                    url: "https://docs.google.com/spreadsheets/d/1OWDCaRNdr3WZr4-lcWR47j6cHdBnf33KQIZKU5p39Ic/edit?usp=sharing",
					data: {"entry.2008660880": field1, "entry.1460631936": field2, "entry.904964149": field3, "entry.1878256062": field4},
                    type: "POST",
                    dataType: "xml",
                    success: function(d)
					{
					},
					error: function(x, y, z)
						{

							$('#success-msg').show();
							$('#form').hide();
							
						}
                });
				return false;
            }
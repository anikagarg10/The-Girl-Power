'use strict';

var vmspincentericon = '<div class="text-center"><i class="fa fa-spin fa-spinner"></i></div>';
var vmspinicon = '<i class="fa fa-spin fa-spinner"></i>';

var addVenue = {
  init: function () {
    $('#mgrAddVenueBtn').click(function () {
      var venue = {};
      venue.name = $('#mgrAddVenueName').val();
      venue.sub_area = $('#mgrAddVenueLocality').val();
      venue.sub_area_seo = venue.sub_area.replace(/ /g, '-').toLowerCase();
      venue.city = $('#mgrAddVenueCity').val();
      venue.vm_id = $('#mgrAddVenueUrl').val();
      venue.isPrimary = true;
      var data = {};
      data.venue = venue;
      data.manager = {
        first: $('#mgrAddVenueManagerFirstName').val(),
        last: $('#mgrAddVenueManagerLastName').val(),
        email: $('#mgrAddVenueManagerEmail').val(),
        phone: $('#mgrAddVenueManagerPhone').val(),
        password: $('#mgrAddVenueManagerPassword').val()
      };
      if (_.isEmpty(data.manager) || _.isEmpty(data.venue)) {
        userNotify("Please add data", "danger");
      } else {
        APIS.venues.onboardVenue(data, function (err, resp) {
          console.log(resp);
          if (!err) {
            dust.render('new-venue-added', resp.data, function (err, out) {
              if (err) {
                console.log(err);
              } else {
                addVenue.reset();
                userNotify("Venue and User created", "danger");
                $('#errorPage-box').html(out);
              }
            });
          } else {
            console.log(err);
          }
        });
      }
    });
    $('#mgrAddVenueResetBtn').click(function () {
      addVenue.reset();
    });
  },
  generateVmId: function () {
    var name = $('#mgrAddVenueName').val();
    var sub_area = $('#mgrAddVenueLocality').val();
    var vmid = _.kebabCase(_.deburr(name + ' ' + sub_area));
    $('#mgrAddVenueUrl').val(vmid);
  },
  checkIfVenueExists: function () {
    var city = $('#mgrAddVenueCity').val();
    var vmid = $('#mgrAddVenueUrl').val();
    if (_.isEmpty(city)) {
      userNotify("Please select city", "danger");
    } else if (_.isEmpty(vmid)) {
      userNotify("Please enter details", "danger");
    } else {
      APIS.venues.checkVenuesForSimilarVmId(city, vmid, null, function (err, resp) {
        if (!err) {
          dust.render('create-venue-check', resp.data, function (err, out) {
            if (err) {
              console.log(err);
            } else {
              $('#errorPage-box').html(out);
            }
          });
        }
      });
    }
  },
  reset: function () {
    $('#mgrAddVenueName').val('');
    $('#mgrAddVenueLocality').val('');
    $('#mgrAddVenueUrl').val('');
    $('#mgrAddVenueManagerFirstName').val('');
    $('#mgrAddVenueManagerLastName').val('');
    $('#mgrAddVenueManagerEmail').val('');
    $('#mgrAddVenueManagerPhone').val('');
    $('#mgrAddVenueManagerPassword').val('');
  },
  searchForLocality: function () {
    $("#mgrAddVenueLocality").autocomplete({
      delay: 20,
      minlength: 3,
      source: function (request, response) {
        var suggestURL = "/searchbox/subarea/%QUERY";
        suggestURL = suggestURL.replace('%QUERY', request.term);
        $.ajax({
          method: 'GET',
          dataType: 'json',
          url: suggestURL
        })
          .success(function (data) {
            response($.map(data.data, function (el) {
              return {
                label: el.name,
                value: el.name
              };
            }));
          });
      },
      select: function (event, ui) {
        $('#mgrAddVenueLocality').val(ui.item.value);
        addVenue.generateVmId();
      }
    });
  }
};

var updateVenueData = {
  init: function () {
    $('.multi-select2').multiSelect({keepOrder: true});

    $('#mgrGetDetailsByVmId').click(function () {
      var city = $('#mgrUpdateCity').val();
      var vmId = $('#mgrUpdateVmId').val();
      var csrf = $('#csrfId').val();
      var data = {'city': city, 'vmId': vmId, '_csrf': csrf};
      $('button[type="submit"]').attr('disabled', 'disabled');
      APIS.venues.getVenueByVmId(city, vmId, null, function (err, venue) {
        $('button[type="submit"]').removeAttr('disabled');
        if (!err) {
          console.log(venue);
          updateVenueData.setGotDataByVmId(venue);
          userNotify("You got data!", "info");
        } else {
          userNotify("Error! Something went wrong!", "danger");
        }
      });
    });

    $('#mgrGetDetailsByVenueId').click(function () {
      var venueId = $('#mgrUpdateVenueId').val();
      $('button[type="submit"]').attr('disabled', 'disabled');
      APIS.venues.getByVenueId(venueId, null, function (err, venue) {
        $('button[type="submit"]').removeAttr('disabled');
        if (!err) {
          console.log(venue);
          updateVenueData.setGotDataByVenueId(venue);
          userNotify("You got data!", "info");
        } else {
          userNotify("Error! Something went wrong!", "danger");
        }
      });
    });


    $('#mgrUpdateVenueBtn').click(function () {
      var data = updateVenueData.setUpdatedData();
      APIS.venues.updateVenue(
        $('#mgrUpdateVenueId').val(), data, null, function (err, response) {
          $('button[type="submit"]').removeAttr('disabled');
          if (!err) {
            userNotify("Venue Data Updated!", "success");
          } else {
            userNotify("Error! Something went wrong!", "danger");
          }
        });
    });

    $('#mgrUpdateVenueResetBtn').click(function () {
      updateVenueData.reset();
      userNotify("Form has been reset", "info");
    });
  },
  setGotDataByVmId: function (data) {
    $('#mgrUpdateVenueId').val(data._id);
    $('#mgrUpdateVenueName').val(data.name);
    $('#mgrUpdateVenueWebsite').val(data.website);
    if (data.contact) {
      $('#mgrUpdateVenueContactName').val(data.contact.name);
      $('#mgrUpdateVenueContactNum').val(data.contact.phone);
      $('#mgrUpdateVenueContactEmail').val(data.contact.email);
    }
    $('#mgrUpdateVenueDescription').val(data.description);
    $('#mgrUpdateVenueShortDescription').val(data.shortDescription);
    $('#mgrUpdateVenueMaxCap').val(data.cap_max);
    $('#mgrUpdateVenueStartPrice').val(data.starting_price);
    $('#mgrUpdateVenueAddress').val(data.address);
    $('#mgrUpdateVenueLocality').val(data.sub_area);
    $('#mgrUpdateVenueCity').val(data.city);
    $('#mgrUpdateVenueLat').val(data.location.latitude);
    $('#mgrUpdateVenueLong').val(data.location.longitude);
    $('#mgrUpdateVenuetypes').multiSelect('select', updateVenueData.fromObjectToArray(data.venuetypes));
    $('#mgrUpdateVenueOccasions').multiSelect('select', updateVenueData.fromObjectToArray(data.suitable_occasions));
    $('#mgrUpdateVenueAmenities').multiSelect('select', updateVenueData.fromObjectToArray(data.facilities));
    $('#mgrUpdateVenueCuisines').multiSelect('select', updateVenueData.fromObjectToArray(data.cuisines));
  },
  setGotDataByVenueId: function (data) {
    $('#mgrUpdateVenueId').val(data._id);
    $('#mgrUpdateVmId').val(data.vm_id);
    $('#mgrUpdateCity').val(data.city);
    $('#mgrUpdateVenueName').val(data.name);
    $('#mgrUpdateVenueWebsite').val(data.website);
    if (data.contact) {
      $('#mgrUpdateVenueContactName').val(data.contact.name);
      $('#mgrUpdateVenueContactNum').val(data.contact.phone);
      $('#mgrUpdateVenueContactEmail').val(data.contact.email);
    }
    $('#mgrUpdateVenueDescription').val(data.description);
    $('#mgrUpdateVenueShortDescription').val(data.shortDescription);
    $('#mgrUpdateVenueMaxCap').val(data.cap_max);
    $('#mgrUpdateVenueStartPrice').val(data.starting_price);
    $('#mgrUpdateVenueAddress').val(data.address);
    $('#mgrUpdateVenueLocality').val(data.sub_area);
    $('#mgrUpdateVenueCity').val(data.city);
    $('#mgrUpdateVenueLat').val(data.location.latitude);
    $('#mgrUpdateVenueLong').val(data.location.longitude);
    $('#mgrUpdateVenuetypes').multiSelect('select', data.venuetypes);
    $('#mgrUpdateVenueOccasions').multiSelect('select', data.suitable_occasions);
    $('#mgrUpdateVenueAmenities').multiSelect('select', data.facilities);
    $('#mgrUpdateVenueCuisines').multiSelect('select', data.cuisines);
  },
  setUpdatedData: function () {
    var venue = {};
    venue.name = $('#mgrUpdateVenueName').val();
    venue.description = $('#mgrUpdateVenueDescription').val();
    venue.shortDescription = $('#mgrUpdateVenueShortDescription').val();
    venue.address = $('#mgrUpdateVenueAddress').val();
    venue.sub_area = $('#mgrUpdateVenueLocality').val();
    venue.sub_area_seo = venue.sub_area.replace(/ /g, '-').toLowerCase();
    venue.city = $('#mgrUpdateVenueCity').val();
    venue.cap_max = $('#mgrUpdateVenueMaxCap').val();
    venue.starting_price = $('#mgrUpdateVenueStartPrice').val();
    venue.location = {
      latitude: $('#mgrUpdateVenueLat').val(),
      longitude: $('#mgrUpdateVenueLong').val()
    };
    venue.website = $('#mgrUpdateVenueWebsite').val();
    venue.contact = {
      name: $('#mgrUpdateVenueContactName').val(),
      phone: $('#mgrUpdateVenueContactNum').val(),
      email: $('#mgrUpdateVenueContactEmail').val()
    };
    venue.facilities = $('#mgrUpdateVenueAmenities').val();
    venue.suitable_occasions = $('#mgrUpdateVenueOccasions').val();
    venue.cuisines = $('#mgrUpdateVenueCuisines').val();
    venue.venuetypes = $('#mgrUpdateVenuetypes').val();
    return (venue);
  },
  fromObjectToArray: function (data) {
    var array = [];
    for (i = 0; i < data.length; i++) {
      array.push(data[i]._id);
    }
    return array;
  },
  reset: function () {
    $('#mgrUpdateVenueId').val('');
    $('#mgrUpdateVmId').val('');
    $('#mgrUpdateCity').val('');
    $('#mgrUpdateVenueName').val('');
    $('#mgrUpdateVenueDescription').val('');
    $('#mgrUpdateShortVenueDescription').val('');
    $('#mgrUpdateVenueAddress').val('');
    $('#mgrUpdateVenueLocality').val('');
    $('#mgrUpdateVenueCity').val('');
    $('#mgrUpdateVenueMaxCap').val('');
    $('#mgrUpdateVenueStartPrice').val('');
    $('#mgrUpdateVenueLat').val('');
    $('#mgrUpdateVenueLong').val('');
    $('#mgrUpdateVenueWebsite').val('');
    $('#mgrUpdateVenueContactName').val('');
    $('#mgrUpdateVenueContactNum').val('');
    $('#mgrUpdateVenueContactEmail').val('');
    $('#mgrUpdateVenueAmenities').multiSelect('deselect_all');
    $('#mgrUpdateVenueOccasions').multiSelect('deselect_all');
    $('#mgrUpdateVenueCuisines').multiSelect('deselect_all');
    $('#mgrUpdateVenuetypes').multiSelect('deselect_all');
  }
};

var imageUpdate = {
  init: function () {
    $('#mgrGetImagesByVenueIdBtn').click(function () {
      $('#mgrImageList').load('/manager/venue/' + $('#mgrImageVenueId').val() + '/imagelist');
    });
  },
  addImage: function (image) {
    var images = toArray($('#updateyourvenue-venue-images').val());
    var index = images.indexOf(image);
    if (index === -1) {
      images.push(image);
    }
    $('#updateyourvenue-venue-images').val(images.join(', '));
  },
  removeImg: function (image) {
    var images = toArray($('#updateyourvenue-venue-images').val());
    var index = images.indexOf(image);
    if (index > -1) {
      images.splice(index, 1);
    }
    $('#updateyourvenue-venue-images').val(images.join(', '));
  },
  removeImage: function (el, image, e) {
    e.preventDefault();
    $(el).closest('.updateyourvenue-image-thumbnail').hide();
    var images = toArray($('#updateyourvenue-venue-images').val());
    var index = images.indexOf(image);
    if (index > -1) {
      images.splice(index, 1);
    }
    $('#updateyourvenue-venue-images').val(images.join(', '));
  },
  setPrimaryImage: function (el, image, e) {
    e.preventDefault();
    $('a.thumbnail-btn.btn.btn-success.btn-sm').removeAttr('disabled').removeClass('btn-success').addClass('btn-default').text('Set as Primary');
    $(el).removeClass('btn-default').addClass('btn-success').text('Primary Image').attr('disabled', 'disabled');
    var images = toArray($('#updateyourvenue-venue-images').val());
    var index = images.indexOf(image);
    if (index > -1) {
      images.splice(index, 1);
      images.unshift(image);
    }

    $('#updateyourvenue-venue-images').val(images.join(', '));
  }
};

var updatePackage = {
  init: function () {
    $('#mgrGetPackagesByVenueIdBtn').click(function () {
      $('#mgrPackageList').load('/manager/venue/' + $('#mgrPackageVenueId').val() + '/packagelist');
    });
  },
  editPackage: function (packageId) {
    $('#mgrUpdatePackageList').load('/manager/venue/' + $('#mgrPackageVenueId').val() + '/package/' + packageId + '/edit/');
  },
  removePackage: function (el, packageId, e) {
    e.preventDefault();
    APIS.packages.removePackage(packageId, function (err, response) {
      if (!err) {
        $('#mgrPackageList').load('/manager/venue/' + $('#mgrPackageVenueId').val() + '/packagelist');
        userNotify("Package has been deleted!", "success");
      } else {
        userNotify("Error! Something went wrong.", "danger");
      }
    });
  },
  savetoDb: function () {
    var pkg = {};
    var packageId = $('#mgrUpdatePackageId').val();
    if (!_.isEmpty($('#mgrUpdatePkgName').val())) {
      pkg.name = $('#mgrUpdatePkgName').val();
    }
    pkg.venue = $('#mgrPackageVenueId').val();
    if (!_.isEmpty($('#mgrUpdatePkgPrice').val())) {
      pkg.package_price = $('#mgrUpdatePkgPrice').val();
    }
    if (!_.isEmpty($('#mgrUpdatePkgDiscountPrice').val())) {
      pkg.discount_percentage = $('#mgrUpdatePkgDiscountPrice').val();
    }
    if (!_.isEmpty($('#mgrUpdatePkgServiceCharge').val())) {
      pkg.service_charge = $('#mgrUpdatePkgServiceCharge').val();
    }
    pkg.final_price = $('#mgrUpdatePkgFinalPrice').val();
    pkg.active = $('#mgrUpdatePkgActive').val();
    var pkgnotes = $('#mgrUpdatePkgNotes').val();
    pkg.notes = pkgnotes.split('||');
    pkg.menuItems = [];
    var items = $('.package-menu-item');
    $.each(items, function (i, item) {
      var name = $(item).find('.package-menu-name').val();
      var menuId = $(item).find('.package-menu-id').val();
      var count = $(item).find('.package-menu-count').val();
      if (!_.isEmpty(name) && !_.isEmpty(menuId)) {
        pkg.menuItems.push({
          name: name,
          menuId: menuId,
          count: count
        });
      }
    });
    console.log(pkg);
    $('#mgrPackageEditBtn').attr('disabled', 'disabled');
    APIS.packages.updatePackage(packageId, pkg, function (err, pkg) {
      $('#mgrPackageEditBtn').removeAttr('disabled');
      if (!err) {
        $('#mgrPackageList').load('/manager/venue/' + $('#mgrPackageVenueId').val() + '/packagelist');
        userNotify("Package has been updated!", "success");
      } else {
        userNotify("Error! Something went wrong.", "danger");
      }
    });
  }
};

var addPackage = {
  init: function () {
    $('#mgrAddPackagesByVenueIdBtn').click(function () {
      $('#mgrMenuPkgList').load('/manager/venue/' + $('#mgrPackageVenueId').val() + '/addMenuToPackagelist');
    });

    $('#mgrPackageCreateBtn').click(function () {
      var pkg = {};

      if (!_.isEmpty($('#mgrAddPkgName').val())) {
        pkg.name = $('#mgrAddPkgName').val();
      }
      pkg.venue = $('#mgrPackageVenueId').val();
      if (!_.isEmpty($('#mgrAddPkgPrice').val())) {
        pkg.package_price = $('#mgrAddPkgPrice').val();
      }
      if (!_.isEmpty($('#mgrAddPkgDiscountPrice').val())) {
        pkg.discount_percentage = $('#mgrAddPkgDiscountPrice').val();
      }
      if (!_.isEmpty($('#mgrAddPkgServiceCharge').val())) {
        pkg.service_charge = $('#mgrAddPkgServiceCharge').val();
      }
      pkg.final_price = $('#mgrAddPkgFinalPrice').val();
      var pkgnotes = $('#mgrAddPkgNotes').val();
      pkg.notes = pkgnotes.split('||');
      pkg.active = $('#mgrAddPkgActive').val();
      pkg.menuItems = [];
      var items = $('.package-menu-item');
      $.each(items, function (i, item) {
        var name = $(item).find('.package-menu-name').val();
        var menuId = $(item).find('.package-menu-id').val();
        var count = $(item).find('.package-menu-count').val();
        if (!_.isEmpty(name) && !_.isEmpty(menuId)) {
          pkg.menuItems.push({
            name: name,
            menuId: menuId,
            count: count
          });
        }
      });

      $('#mgrPackageCreateBtn').attr('disabled', 'disabled');
      APIS.packages.addPackage(pkg, null, function (err, pkg) {
        $('#mgrPackageCreateBtn').removeAttr('disabled');
        if (!err) {
          userNotify("Package has been created!", "success");
        } else {
          userNotify("Error! Something went wrong.", "danger");
        }
      });

    });
  }
};

var addCollection = {
  init: function () {
    $('#mgrClcCreateBtn').click(function () {
      var collection = {};
      if (!_.isEmpty($('#mgrAddClcName').val())) {
        collection.name = $('#mgrAddClcName').val();
      }
      if (!_.isEmpty($('#mgrAddClcURL').val())) {
        collection.url = $('#mgrAddClcURL').val();
      }
      collection.title = $('#mgrAddClcTitle').val();
      collection.description = $('#mgrAddClcDescription').val();
      collection.shortDescription = $('#mgrAddClcShortDescription').val();
      collection.city = $('#mgrAddClcCity').val();
      collection.thumbnail = $('#mgrAddClcThumbnail').val();
      collection.approved = $('#mgrAddClcApprove').val();
      collection.priority = parseInt($('#mgrAddClcPriority').val());
      var tags = $('#mgrAddClcTags').val();
      collection.tags = tags.split(',');
      var venues = $('#mgrAddClcVenues').val();
      collection.venues = venues.split(',');
      $('#mgrClcCreateBtn').attr('disabled', 'disabled');
      APIS.collections.addCollection(collection, null, function (err, collection) {
        $('#mgrClcCreateBtn').removeAttr('disabled');
        if (!err) {
          userNotify("Collection has been created!", "success");
        } else {
          userNotify("Error! Something went wrong.", "danger");
        }
      });

    });
  }
};

var updateCollection = {
  init: function () {
    $('#mgrGetDetailsByClcId').click(function () {
      $('#mgrUpdateCollection').load('/manager/collection/' + $('#mgrGetDataById').val() + '/data');
      userNotify("Collection loaded!", "success");
    });
  },
  removeCollection: function (collectionId) {
    e.preventDefault();
    APIS.collections.removeCollection(collectionId, function (err, response) {
      if (!err) {
        $('#mgrPackageList').load('/manager/venue/' + $('#mgrPackageVenueId').val() + '/packagelist');
        userNotify("Package has been deleted!", "success");
      } else {
        userNotify("Error! Something went wrong.", "danger");
      }
    });
  },
  savetoDb: function () {
    var collection = {};
    var collectionId = $('#mgrGetDataById').val();
    if (!_.isEmpty($('#mgrUpdateClcName').val())) {
      collection.name = $('#mgrUpdateClcName').val();
    }
    if (!_.isEmpty($('#mgrUpdateClcURL').val())) {
      collection.url = $('#mgrUpdateClcURL').val();
    }
    collection.title = $('#mgrUpdateClcTitle').val();
    collection.description = $('#mgrUpdateClcDescription').val();
    collection.shortDescription = $('#mgrUpdateClcShortDescription').val();
    collection.city = $('#mgrUpdateClcCity').val();
    collection.thumbnail = $('#mgrUpdateClcThumbnail').val();
    collection.approved = $('#mgrUpdateClcApprove').val();
    collection.priority = parseInt($('#mgrUpdateClcPriority').val());
    var tags = $('#mgrUpdateClcTags').val();
    collection.tags = tags.split(',');
    var venues = $('#mgrUpdateClcVenues').val();
    collection.venues = venues.split(',');
    $('#mgrClcUpdateBtn').attr('disabled', 'disabled');
    console.log(collection);
    APIS.collections.updateCollection(collectionId, collection, function (err, collection) {
      $('#mgrClcUpdateBtn').removeAttr('disabled');
      if (!err) {
        userNotify("Collection has been updated!", "success");
      } else {
        userNotify("Error! Something went wrong.", "danger");
      }
    });
  }
};

var manageMenu = {
  init: function () {
    $('#mgrGetMenusByVenueIdBtn').click(function () {
      APIS.menus.getMenusByVenueId($('#mgrMenuVenueId').val(), function (err, response) {
        if (!err) {
          dust.render('menulist', response.data, function (err, out) {
            if (err) {
              console.log(err);
            } else {
              $('#mgrMenuList').html(out);
              $('#mgrAddMenuVenueId').val($('#mgrMenuVenueId').val());
              userNotify("You got data!", "info");
            }
          });
        } else {
          console.log(err);
        }
      });
    });

    $('#addNewMenuItem').click(function (e) {
      e.preventDefault();
      var newMenuEl = " <div class='form-group clone-menu-item'> <label class='col-sm-2 control-label'>Item</label> <div class='col-sm-4'> <input class='mgr-create-menu-item-name form-control' placeholder='Item Name Eg: Starter' type='text'> </div> <div class='col-sm-4'> <input class='mgr-create-menu-item-price form-control' placeholder='1200' type='text'> </div> <div class='col-sm-2'> <button class='btn btn-default' onclick='manageMenu.delMenuItem(this)';> <i class='fa fa-minus fa-sm'></i> </button> </div> </div>";
      $("#menuItemList").append(newMenuEl);
    });

    $('#mgrMenuCreateBtn').click(function () {
      var menu = {};

      if (!_.isEmpty($('#mgrMenuName').val())) {
        menu.name = $('#mgrMenuName').val();
      }
      menu.venue = $('#mgrAddMenuVenueId').val();
      menu.available = $('#mgrMenuAvailable').val();
      menu.items = [];
      var items = $('.clone-menu-item');
      $.each(items, function (i, item) {
        var name = $(item).find('.mgr-create-menu-item-name').val();
        var price = $(item).find('.mgr-create-menu-item-price').val();
        if (!_.isEmpty(name)) {
          menu.items.push({
            name: name,
            price: price
          });
        }
      });

      if (menu.items.length < 1) {
        userNotify("Menu must have 1 item!", "info");
      }
      console.log(menu);
      $('#mgrMenuCreateBtn').attr('disabled', 'disabled');
      APIS.menus.addMenu(menu, null, function (err, menu) {
        $('#mgrMenuCreateBtn').removeAttr('disabled');
        if (!err) {
          userNotify("Menu has been added!", "success");
        } else {
          userNotify("Error! Something went wrong.", "danger");
        }
      });
    });
  },
  editMenu: function (menuId) {
    if (_.isEmpty(menuId)) {
      userNotify("Please refresh browser!", "danger");
    } else {
      APIS.menus.getMenuById(menuId, function (err, response) {
        if (!err) {
          dust.render('edit-menu-form', response.data, function (err, out) {
            if (err) {
              console.log(err);
            } else {
              $('#menuModal').find('.modal-content').html(out);
              $('#menuModal').modal('show');
            }
          });
        } else {
          console.log(err);
        }
      });
    }
  },
  addData: function () {
    var menu = {};
    if (!_.isEmpty($('#mgrEditMenuName').val())) {
      menu.name = $('#mgrEditMenuName').val();
    }
    menu.venue = $('#mgrEditMenuVenueId').val();
    menu.available = $('#mgrEditMenuAvailable').val();
    menu.items = [];
    var items = $('.edit-menu-item');
    $.each(items, function (i, item) {
      var name = $(item).find('.mgr-edit-menu-item-name').val();
      var price = $(item).find('.mgr-edit-menu-item-price').val();
      if (!_.isEmpty(name)) {
        menu.items.push({
          name: name,
          price: price
        });
      }
    });
    if (menu.items.length < 1) {
      userNotify("Menu must have 1 item!", "info");
    }
    console.log(menu);
    $('#mgrMenuEditBtn').attr('disabled', 'disabled');
    APIS.menus.updateMenu($('#mgrEditMenuId').val(), menu, function (err, menu) {
      $('#mgrMenuEditBtn').removeAttr('disabled');
      if (!err) {
        userNotify("Menu has been updated!", "success");
        $('#mgrMenuList').load('/manager/venue/' + $('#mgrMenuVenueId').val() + '/menulist');
      } else {
        userNotify("Error! Something went wrong.", "danger");
      }
    });
  },
  delMenuItem: function (el) {
    console.log(el);
    var jqEl = $(el);
    var tag = jqEl.parent().parent();
    console.log(tag);
    tag.remove();
  },
  addEditMenuItem: function () {
    var newMenuEl = " <div class='form-group edit-menu-item'> <label class='col-sm-2 control-label'>Item</label> <div class='col-sm-4'> <input class='mgr-edit-menu-item-name form-control' placeholder='Item Name Eg: Starter' type='text'> </div> <div class='col-sm-4'> <input class='mgr-edit-menu-item-price form-control' placeholder='1200' type='text'> </div> <div class='col-sm-2'> <button class='btn btn-default' onclick='manageMenu.delMenuItem(this)';> <i class='fa fa-minus fa-sm'></i> </button> </div> </div>";
    $("#menuEditItemList").append(newMenuEl);
  },
  removeMenu: function (menuId) {
    APIS.menus.removeMenu(menuId, function (err, response) {
      if (!err) {
        userNotify("Menu has been deleted!", "success");
        $('#mgrMenuList').load('/manager/venue/' + $('#mgrMenuVenueId').val() + '/menulist');
      } else {
        userNotify("Error! Something went wrong.", "danger");
      }
    });
  }
};

var addCaterer = {
  init: function () {
    $('.multi-select2').multiSelect({keepOrder: true});

    $('#mgrAddCatererName, #mgrAddCatererLocality').change(function () {
      var name = $('#mgrAddCatererName').val();
      var sub_area = $('#mgrAddCatererLocality').val();
      if (!_.isString(name) && !_.isString(sub_area)) {
        var url = _.kebabCase(_.deburr(name + ' ' + sub_area));
        $('#mgrAddCatererURL').val(url);
      }
    });

    $('#mgrCatererResetBtn').click(function () {
      addCaterer.reset();
    });
    $('#mgrCreateCatererBtn').click(function () {
      var caterer = {};
      if (!_.isEmpty($('#mgrAddCatererName').val())) {
        caterer.name = $('#mgrAddCatererName').val();
      }
      caterer.address = $('#mgrAddCatererAddress').val();
      caterer.sub_area = $('#mgrAddCatererLocality').val();
      caterer.sub_area_seo = caterer.sub_area.replace(/ /g, '-').toLowerCase();
      caterer.city = $('#mgrAddCatererCity').val();
      caterer.location = {
        latitude: $('#mgrAddCatererLat').val(),
        longitude: $('#mgrAddCatererLong').val()
      };
      caterer.url = $('#mgrAddCatererURL').val();
      caterer.description = $('#mgrAddCatererDescription').val();
      caterer.shortDescription = $('#mgrAddCatererShortDescription').val();
      caterer.website = $('#mgrAddCatererWebsite').val();
      caterer.contact = {
        name: $('#mgrAddCatererContactName').val(),
        phone: $('#mgrAddCatererContactNum').val(),
        email: $('#mgrAddCatererContactEmail').val()
      };
      var phone = $('#mgrAddCatererPhone').val();
      caterer.phone = phone.split(',');
      caterer.min_guarantee = parseFloat($('#mgrAddCatererMinGuarantee').val());
      caterer.starting_price = parseFloat($('#mgrAddCatererStartingPrice').val());
      caterer.approved = $('#mgrAddCatererApprove').val();
      caterer.priority = parseInt($('#mgrAddCatererPriority').val());
      caterer.rating = parseFloat($('#mgrAddCatererRating').val());
      caterer.suitable_occasions = $('#mgrAddCatererOccasions').val();
      caterer.cuisines = $('#mgrAddCatererCuisines').val();
      caterer.caterertypes = $('#mgrAddCaterertypes').val();
      caterer.diet_prefs = $('#mgrAddCatererdiets').val();
      caterer.services = $('#mgrAddCatererservices').val();
      var images = $('#mgrAddCatererImages').val();
      caterer.images = images.split(',');
      caterer.packages = [];
      var items = $('.caterer-pack-group');
      $.each(items, function (i, item) {
        var name = $(item).find('.caterer-pack-name').val();
        var price = $(item).find('.caterer-pack-price').val();
        if (!_.isEmpty(name) && !_.isEmpty(price)) {
          caterer.packages.push({
            name: name,
            price: price
          });
        }
      });
      console.log(caterer);
      $('#mgrCreateCatererBtn').attr('disabled', 'disabled');
      APIS.caterers.addCaterer(caterer, null, function (err, caterer) {
        $('#mgrCreateCatererBtn').removeAttr('disabled');
        if (!err) {
          userNotify("caterer has been created!", "success");
        } else {
          userNotify("Error! Something went wrong.", "danger");
        }
      });
    });
  },
  reset: function () {
    $('#mgrAddCatererName').val('');
    $('#mgrAddCatererAddress').val('');
    $('#mgrAddCatererLocality').val('');
    $('#mgrAddCatererCity').val('');
    $('#mgrAddCatererLat').val('');
    $('#mgrAddCatererLong').val('');
    $('#mgrAddCatererURL').val('');
    $('#mgrAddCatererDescription').val('');
    $('#mgrAddCatererShortDescription').val('');
    $('#mgrAddCatererWebsite').val('');
    $('#mgrAddCatererPhone').val('');
    $('#mgrAddCatererContactName').val('');
    $('#mgrAddCatererContactNum').val('');
    $('#mgrAddCatererMinGuarantee').val('');
    $('#mgrAddCatererStartingPrice').val('');
    $('#mgrAddCatererContactEmail').val('');
    $('#mgrAddCatererApprove').val('false');
    $('#mgrAddCatererRating').val('');
    $('#mgrAddCatererPriority').val('');
    $('#mgrAddCatererImages').val('');
    $('#mgrAddCatererOccasions').multiSelect('deselect_all');
    $('#mgrAddCatererCuisines').multiSelect('deselect_all');
    $('#mgrAddCaterertypes').multiSelect('deselect_all');
    $('#mgrAddCatererdiets').multiSelect('deselect_all');
    $('#mgrAddCatererservices').multiSelect('deselect_all');
    var items = $('.caterer-pack-group');
    $.each(items, function (i, item) {
      $(item).find('.caterer-pack-name').val('');
      $(item).find('.caterer-pack-price').val('');
    });
  },
  addpack: function () {
    var newEl = "<div class='col-md-6'><div class='panel panel-default show'> <div class='panel-heading'><h2>Pack Item</h2> <button href='#' class=' btn btn-danger pull-right' role='button' style='margin: 1%;' onclick='addCaterer.delpack(this);'> <i class='fa fa-trash-o'></i> </button> </div> <div class='panel-body'> <form action='' class='form-horizontal row-border caterer-pack-group'> <div class='form-group'> <label class='col-sm-2 control-label'>Pack Title</label> <div class='col-sm-8'> <input class='form-control caterer-pack-name' placeholder='Pack Name' type='text'> </div> </div> <div class='form-group'> <label class='col-sm-2 control-label'>Pack Price</label> <div class='col-sm-8'> <input class='form-control caterer-pack-price' placeholder='1200' type='text'> </div> </div></form> </div> </div> </div>";
    $("#catererPackContainer").append(newEl);
  },
  delpack: function (el) {
    console.log(el);
    var jqEl = $(el);
    var tag = jqEl.parent().parent().parent();
    console.log(tag);
    tag.remove();
  }
};

var updateCaterer = {
  init: function () {
    $('.multi-select2').multiSelect({keepOrder: true});

    $('#mgrGetCatererByIdBtn').click(function () {
      var catererId = $('#mgrUpdateCatererId').val();
      $('button[type="submit"]').attr('disabled', 'disabled');
      $('#updatedCatererDataContainer').load('/manager/vendors/caterer/' + catererId + '/updatedata');
      var cuiArray = $('#mgrUpdateCuisines').val().split(',');
      var typeArray = $('#mgrUpdatetypes').val().split(',');
      var occArray = $('#mgrUpdateOccasions').val().split(',');
      var dietArray = $('#mgrUpdateDiets').val().split(',');
      var servArray = $('#mgrUpdateServices').val().split(',');
      $('#mgrUpdateCatererOccasions').multiSelect('select', occArray);
      $('#mgrUpdateCatererCuisines').multiSelect('select', cuiArray);
      $('#mgrUpdateCaterertypes').multiSelect('select', typeArray);
      $('#mgrUpdateCatererdiets').multiSelect('select', dietArray);
      $('#mgrUpdateCatererservices').multiSelect('select', servArray);
      userNotify("You got data!", "info");
      $('button[type="submit"]').removeAttr('disabled');
    });

    $('#mgrUpdateCatererBtn').click(function () {
      var data = updateCaterer.setUpdatedData();
      console.log(data);
      APIS.caterers.updateCaterer($('#mgrUpdateCatererId').val(), data, null, function (err, response) {
        $('button[type="submit"]').removeAttr('disabled');
        if (!err) {
          userNotify("Caterer Data Updated!", "success");
        } else {
          userNotify("Error! Something went wrong!", "danger");
        }
      });
    });

    $('#mgrUpdateCatererResetBtn').click(function () {
      updateCaterer.reset();
      userNotify("Form has been reset", "info");
    });
  },
  setUpdatedData: function () {
    var caterer = {};
    if (!_.isEmpty($('#mgrUpdateCatererName').val())) {
      caterer.name = $('#mgrUpdateCatererName').val();
    }
    caterer.address = $('#mgrUpdateCatererAddress').val();
    caterer.sub_area = $('#mgrUpdateCatererLocality').val();
    caterer.sub_area_seo = caterer.sub_area.replace(/ /g, '-').toLowerCase();
    caterer.city = $('#mgrUpdateCatererCity').val();
    caterer.location = {
      latitude: $('#mgrUpdateCatererLat').val(),
      longitude: $('#mgrUpdateCatererLong').val()
    };
    caterer.url = $('#mgrUpdateCatererURL').val();
    caterer.description = $('#mgrUpdateCatererDescription').val();
    caterer.shortDescription = $('#mgrUpdateCatererShortDescription').val();
    caterer.website = $('#mgrUpdateCatererWebsite').val();
    caterer.contact = {
      name: $('#mgrUpdateCatererContactName').val(),
      phone: $('#mgrUpdateCatererContactNum').val(),
      email: $('#mgrUpdateCatererContactEmail').val()
    };
    var phone = $('#mgrUpdateCatererPhone').val();
    caterer.phone = phone.split(',');
    caterer.min_guarantee = parseFloat($('#mgrUpdateCatererMinGuarantee').val());
    caterer.starting_price = parseFloat($('#mgrUpdateCatererStartingPrice').val());
    caterer.approved = $('#mgrUpdateCatererApprove').val();
    caterer.priority = parseInt($('#mgrUpdateCatererPriority').val());
    caterer.rating = parseFloat($('#mgrUpdateCatererRating').val());
    caterer.suitable_occasions = $('#mgrUpdateCatererOccasions').val();
    caterer.cuisines = $('#mgrUpdateCatererCuisines').val();
    caterer.caterertypes = $('#mgrUpdateCaterertypes').val();
    caterer.diet_prefs = $('#mgrUpdateCatererdiets').val();
    caterer.services = $('#mgrUpdateCatererservices').val();
    var images = $('#mgrUpdateCatererImages').val();
    caterer.images = images.split(',');
    caterer.packages = [];
    var items = $('.caterer-pack-group');
    $.each(items, function (i, item) {
      var name = $(item).find('.caterer-pack-name').val();
      var price = $(item).find('.caterer-pack-price').val();
      if (!_.isEmpty(name) && !_.isEmpty(price)) {
        caterer.packages.push({
          name: name,
          price: price
        });
      }
    });
    return (caterer);
  },
  fromObjectToArray: function (data) {
    var data1 = data;
    var array1 = data1.split(',');
    return array1;
  },
  reset: function () {
    $('#mgrUpdateCatererName').val('');
    $('#mgrUpdateCatererAddress').val('');
    $('#mgrUpdateCatererLocality').val('');
    $('#mgrUpdateCatererCity').val('');
    $('#mgrUpdateCatererLat').val('');
    $('#mgrUpdateCatererLong').val('');
    $('#mgrUpdateCatererURL').val('');
    $('#mgrUpdateCatererDescription').val('');
    $('#mgrUpdateCatererShortDescription').val('');
    $('#mgrAddCatererWebsite').val('');
    $('#mgrUpdateCatererPhone').val('');
    $('#mgrUpdateCatererContactName').val('');
    $('#mgrUpdateCatererContactNum').val('');
    $('#mgrUpdateCatererMinGuarantee').val('');
    $('#mgrUpdateCatererStartingPrice').val('');
    $('#mgrUpdateCatererContactEmail').val('');
    $('#mgrUpdateCatererApprove').val('false');
    $('#mgrUpdateCatererRating').val('');
    $('#mgrUpdateCatererPriority').val('');
    $('#mgrUpdateCatererImages').val('');
    $('#mgrUpdateCatererOccasions').multiSelect('deselect_all');
    $('#mgrUpdateCatererCuisines').multiSelect('deselect_all');
    $('#mgrUpdateCaterertypes').multiSelect('deselect_all');
    $('#mgrUpdateCatererdiets').multiSelect('deselect_all');
    $('#mgrUpdateCatererservices').multiSelect('deselect_all');
    var items = $('.caterer-pack-group');
    $.each(items, function (i, item) {
      $(item).find('.caterer-pack-name').val('');
      $(item).find('.caterer-pack-price').val('');
    });
  }
};

var addDecorator = {
  init: function () {
    $('.multi-select2').multiSelect({keepOrder: true});

    $('#mgrAddDecoratorName, #mgrAddDecoratorLocality').change(function () {
      var name = $('#mgrAddDecoratorName').val();
      var sub_area = $('#mgrAddDecoratorLocality').val();
      if (!_.isString(name) && !_.isString(sub_area)) {
        var url = _.kebabCase(_.deburr(name + ' ' + sub_area));
        $('#mgrAddDecoratorURL').val(url);
      }
    });

    $('#mgrDecoratorResetBtn').click(function () {
      addDecorator.reset();
    });
    $('#mgrCreateDecoratorBtn').click(function () {
      var decorator = {};
      if (!_.isEmpty($('#mgrAddDecoratorName').val())) {
        decorator.name = $('#mgrAddDecoratorName').val();
      }
      decorator.address = $('#mgrAddDecoratorAddress').val();
      decorator.sub_area = $('#mgrAddDecoratorLocality').val();
      decorator.sub_area_seo = decorator.sub_area.replace(/ /g, '-').toLowerCase();
      decorator.city = $('#mgrAddDecoratorCity').val();
      decorator.location = {
        latitude: $('#mgrAddDecoratorLat').val(),
        longitude: $('#mgrAddDecoratorLong').val()
      };
      decorator.url = $('#mgrAddDecoratorURL').val();
      decorator.description = $('#mgrAddDecoratorDescription').val();
      decorator.shortDescription = $('#mgrAddDecoratorShortDescription').val();
      decorator.website = $('#mgrAddDecoratorWebsite').val();
      decorator.contact = {
        name: $('#mgrAddDecoratorContactName').val(),
        phone: $('#mgrAddDecoratorContactNum').val(),
        email: $('#mgrAddDecoratorContactEmail').val()
      };
      var phone = $('#mgrAddDecoratorPhone').val();
      decorator.phone = phone.split(',');
      decorator.min_order = parseInt($('#mgrAddDecoratorMinOrder').val());
      decorator.approved = $('#mgrAddDecoratorApprove').val();
      decorator.priority = parseInt($('#mgrAddDecoratorPriority').val());
      decorator.rating = parseFloat($('#mgrAddDecoratorRating').val());
      decorator.suitable_occasions = $('#mgrAddDecoratorOccasions').val();
      var images = $('#mgrAddDecoratorImages').val();
      decorator.images = images.split(',');
      var services = $('#mgrAddDecoratorServices').val();
      decorator.services = services.split(',');
      var flowers = $('#mgrAddDecoratorFlowers').val();
      decorator.flowers = flowers.split(',');
      var gifts = $('#mgrAddDecoratorGifts').val();
      decorator.gifts = gifts.split(',');
      console.log(decorator);
      $('#mgrCreateDecoratorBtn').attr('disabled', 'disabled');
      APIS.decorators.addDecorator(decorator, null, function (err, decorator) {
        $('#mgrCreateDecoratorBtn').removeAttr('disabled');
        if (!err) {
          userNotify("decorator has been created!", "success");
        } else {
          userNotify("Error! Something went wrong.", "danger");
        }
      });

    });
  },
  reset: function () {
    $('#mgrAddDecoratorName').val('');
    $('#mgrAddDecoratorAddress').val('');
    $('#mgrAddDecoratorLocality').val('');
    $('#mgrAddDecoratorCity').val('');
    $('#mgrAddDecoratorLat').val('');
    $('#mgrAddDecoratorLong').val('');
    $('#mgrAddDecoratorURL').val('');
    $('#mgrAddDecoratorDescription').val('');
    $('#mgrAddDecoratorShortDescription').val('');
    $('#mgrAddDecoratorWebsite').val('');
    $('#mgrAddDecoratorPhone').val('');
    $('#mgrAddDecoratorContactName').val('');
    $('#mgrAddDecoratorContactNum').val('');
    $('#mgrAddDecoratorMinOrder').val('');
    $('#mgrAddDecoratorContactEmail').val('');
    $('#mgrAddDecoratorApprove').val('false');
    $('#mgrAddDecoratorRating').val('');
    $('#mgrAddDecoratorPriority').val('');
    $('#mgrAddDecoratorImages').val('');
    $('#mgrAddDecoratorServices').val('');
    $('#mgrAddDecoratorFlowers').val('');
    $('#mgrAddDecoratorGifts').val('');
    $('#mgrAddDecoratorOccasions').multiSelect('deselect_all');
  }
};

var updateDecorator = {
  init: function () {
    $('.multi-select2').multiSelect({keepOrder: true});

    $('#mgrGetDecoratorByIdBtn').click(function () {
      var decoratorId = $('#mgrUpdateDecoratorId').val();
      $('button[type="submit"]').attr('disabled', 'disabled');
      $('#updatedDecoratorDataContainer').load('/manager/vendors/decorator/' + decoratorId + '/updatedata');
      var occArray = $('#mgrUpdateOccasions').val().split(',');
      $('#mgrUpdateDecoratorOccasions').multiSelect('select', occArray);
      userNotify("You got data!", "info");
      $('button[type="submit"]').removeAttr('disabled');
    });

    $('#mgrUpdateDecoratorBtn').click(function () {
      var data = updateDecorator.setUpdatedData();
      console.log(data);
      APIS.decorators.updateDecorator($('#mgrUpdateDecoratorId').val(), data, null, function (err, response) {
        $('button[type="submit"]').removeAttr('disabled');
        if (!err) {
          userNotify("Decorator Data Updated!", "success");
        } else {
          userNotify("Error! Something went wrong!", "danger");
        }
      });
    });

    $('#mgrUpdateDecoratorResetBtn').click(function () {
      updateDecorator.reset();
      userNotify("Form has been reset", "info");
    });
  },
  setUpdatedData: function () {
    var decorator = {};
    if (!_.isEmpty($('#mgrUpdateDecoratorName').val())) {
      decorator.name = $('#mgrUpdateDecoratorName').val();
    }
    decorator.address = $('#mgrUpdateDecoratorAddress').val();
    decorator.sub_area = $('#mgrUpdateDecoratorLocality').val();
    decorator.sub_area_seo = decorator.sub_area.replace(/ /g, '-').toLowerCase();
    decorator.city = $('#mgrUpdateDecoratorCity').val();
    decorator.location = {
      latitude: $('#mgrUpdateDecoratorLat').val(),
      longitude: $('#mgrUpdateDecoratorLong').val()
    };
    decorator.url = $('#mgrUpdateDecoratorURL').val();
    decorator.description = $('#mgrUpdateDecoratorDescription').val();
    decorator.shortDescription = $('#mgrUpdateDecoratorShortDescription').val();
    decorator.website = $('#mgrUpdateDecoratorWebsite').val();
    decorator.contact = {
      name: $('#mgrUpdateDecoratorContactName').val(),
      phone: $('#mgrUpdateDecoratorContactNum').val(),
      email: $('#mgrUpdateDecoratorContactEmail').val()
    };
    var phone = $('#mgrUpdateDecoratorPhone').val();
    decorator.phone = phone.split(',');
    decorator.min_order = parseInt($('#mgrUpdateDecoratorMinOrder').val());
    decorator.approved = $('#mgrUpdateDecoratorApprove').val();
    decorator.priority = parseInt($('#mgrUpdateDecoratorPriority').val());
    decorator.rating = parseFloat($('#mgrUpdateDecoratorRating').val());
    decorator.suitable_occasions = $('#mgrUpdateDecoratorOccasions').val();
    var images = $('#mgrUpdateDecoratorImages').val();
    decorator.images = images.split(',');
    var services = $('#mgrUpdateDecoratorServices').val();
    decorator.services = services.split(',');
    var flowers = $('#mgrUpdateDecoratorFlowers').val();
    decorator.flowers = flowers.split(',');
    var gifts = $('#mgrUpdateDecoratorGifts').val();
    decorator.gifts = gifts.split(',');
    return (decorator);
  },
  fromObjectToArray: function (data) {
    var data1 = data;
    var array1 = data1.split(',');
    return array1;
  },
  reset: function () {
    $('#mgrUpdateDecoratorName').val('');
    $('#mgrUpdateDecoratorAddress').val('');
    $('#mgrUpdateDecoratorLocality').val('');
    $('#mgrUpdateDecoratorCity').val('');
    $('#mgrUpdateDecoratorLat').val('');
    $('#mgrUpdateDecoratorLong').val('');
    $('#mgrUpdateDecoratorURL').val('');
    $('#mgrUpdateDecoratorDescription').val('');
    $('#mgrUpdateDecoratorShortDescription').val('');
    $('#mgrUpdateDecoratorWebsite').val('');
    $('#mgrUpdateDecoratorPhone').val('');
    $('#mgrUpdateDecoratorContactName').val('');
    $('#mgrUpdateDecoratorContactNum').val('');
    $('#mgrUpdateDecoratorMinOrder').val('');
    $('#mgrUpdateDecoratorContactEmail').val('');
    $('#mgrUpdateDecoratorApprove').val('false');
    $('#mgrUpdateDecoratorRating').val('');
    $('#mgrUpdateDecoratorPriority').val('');
    $('#mgrUpdateDecoratorImages').val('');
    $('#mgrUpdateDecoratorServices').val('');
    $('#mgrUpdateDecoratorFlowers').val('');
    $('#mgrUpdateDecoratorGifts').val('');
    $('#mgrUpdateDecoratorOccasions').multiSelect('deselect_all');
  }
};

var addPlanner = {
  init: function () {
    $('.multi-select2').multiSelect({keepOrder: true});
    $('#mgrPlannerResetBtn').click(function () {
      addPlanner.reset();
    });
    $('#mgrCreatePlannerBtn').click(function () {
      var planner = {};
      if (!_.isEmpty($('#mgrAddPlannerName').val())) {
        planner.name = $('#mgrAddPlannerName').val();
      }
      planner.address = $('#mgrAddPlannerAddress').val();
      planner.sub_area = $('#mgrAddPlannerLocality').val();
      planner.sub_area_seo = planner.sub_area.replace(/ /g, '-').toLowerCase();
      planner.city = $('#mgrAddPlannerCity').val();
      planner.location = {
        latitude: $('#mgrAddPlannerLat').val(),
        longitude: $('#mgrAddPlannerLong').val()
      };
      planner.url = $('#mgrAddPlannerURL').val();
      planner.description = $('#mgrAddPlannerDescription').val();
      planner.shortDescription = $('#mgrAddPlannerShortDescription').val();
      planner.website = $('#mgrAddPlannerWebsite').val();
      planner.contact = {
        name: $('#mgrAddPlannerContactName').val(),
        phone: $('#mgrAddPlannerContactNum').val(),
        email: $('#mgrAddPlannerContactEmail').val()
      };
      var phone = $('#mgrAddPlannerPhone').val();
      planner.phone = phone.split(',');
      planner.team_size = parseInt($('#mgrAddPlannerTeamSize').val());
      planner.approved = $('#mgrAddPlannerApprove').val();
      planner.hotel_deals = $('#mgrAddPlannerHotelDeals').val();
      planner.priority = parseInt($('#mgrAddPlannerPriority').val());
      planner.rating = parseFloat($('#mgrAddPlannerRating').val());
      planner.core_services = $('#mgrAddPlannerServices').val();
      planner.suitable_occasions = $('#mgrAddPlannerOccasions').val();
      planner.additional_services = $('#mgrAddPlannerExtras').val();
      var images = $('#mgrAddPlannerImages').val();
      planner.images = images.split(',');
      planner.packages = [];
      var items = $('.planner-pack-group');
      $.each(items, function (i, item) {
        var name = $(item).find('.planner-pack-name').val();
        var price = $(item).find('.planner-pack-price').val();
        if (!_.isEmpty(name) && !_.isEmpty(price)) {
          planner.packages.push({
            name: name,
            price: price
          });
        }
      });
      console.log(planner);
      $('#mgrCreatePlannerBtn').attr('disabled', 'disabled');
      APIS.eplanners.addEplanner(planner, null, function (err, planner) {
        $('#mgrCreatePlannerBtn').removeAttr('disabled');
        if (!err) {
          userNotify("planner has been created!", "success");
        } else {
          userNotify("Error! Something went wrong.", "danger");
        }
      });

    });
  },
  reset: function () {
    $('#mgrAddPlannerName').val('');
    $('#mgrAddPlannerAddress').val('');
    $('#mgrAddPlannerLocality').val('');
    $('#mgrAddPlannerCity').val('');
    $('#mgrAddPlannerLat').val('');
    $('#mgrAddPlannerLong').val('');
    $('#mgrAddPlannerURL').val('');
    $('#mgrAddPlannerDescription').val('');
    $('#mgrAddPlannerShortDescription').val('');
    $('#mgrAddPlannerWebsite').val('');
    $('#mgrAddPlannerPhone').val('');
    $('#mgrAddPlannerContactName').val('');
    $('#mgrAddPlannerContactNum').val('');
    $('#mgrAddPlannerTeamSize').val('');
    $('#mgrAddPlannerContactEmail').val('');
    $('#mgrAddPlannerApprove').val('false');
    $('#mgrAddPlannerHotelDeals').val('false');
    $('#mgrAddPlannerRating').val('');
    $('#mgrAddPlannerPriority').val('');
    $('#mgrAddPlannerImages').val('');
    $('#mgrAddPlannerExtras').multiSelect('deselect_all');
    $('#mgrAddPlannerOccasions').multiSelect('deselect_all');
    $('#mgrAddPlannerServices').multiSelect('deselect_all');
    var items = $('.planner-pack-group');
    $.each(items, function (i, item) {
      $(item).find('.planner-pack-name').val('');
      $(item).find('.planner-pack-price').val('');
    });
  },
  addpack: function () {
    var newEl = "<div class='col-md-6'><div class='panel panel-default show'> <div class='panel-heading'><h2>Pack Item</h2> <button href='#' class=' btn btn-danger pull-right' role='button' style='margin: 1%;' onclick='addPlanner.delpack(this);'> <i class='fa fa-trash-o'></i> </button> </div> <div class='panel-body'> <form action='' class='form-horizontal row-border planner-pack-group'> <div class='form-group'> <label class='col-sm-2 control-label'>Pack Title</label> <div class='col-sm-8'> <input class='form-control planner-pack-name' placeholder='Pack Name' type='text'> </div> </div> <div class='form-group'> <label class='col-sm-2 control-label'>Pack Price</label> <div class='col-sm-8'> <input class='form-control planner-pack-price' placeholder='1200' type='text'> </div> </div></form> </div> </div> </div>";
    $("#plannerPackContainer").append(newEl);
  },
  delpack: function (el) {
    console.log(el);
    var jqEl = $(el);
    var tag = jqEl.parent().parent().parent();
    console.log(tag);
    tag.remove();
  }
};

var updatePlanner = {
  init: function () {
    $('.multi-select2').multiSelect({keepOrder: true});

    $('#mgrGetPlannerByIdBtn').click(function () {
      var plannerId = $('#mgrUpdatePlannerId').val();
      $('button[type="submit"]').attr('disabled', 'disabled');
      $('#updatedPlannerDataContainer').load('/manager/vendors/planner/' + plannerId + '/updatedata');
      var occArray = $('#mgrUpdateOccasions').val().split(',');
      var servArray = $('#mgrUpdateServices').val().split(',');
      var extArray = $('#mgrUpdateExtras').val().split(',');
      $('#mgrUpdatePlannerOccasions').multiSelect('select', occArray);
      $('#mgrUpdatePlannerServices').multiSelect('select', servArray);
      $('#mgrUpdatePlannerExtras').multiSelect('select', extArray);
      userNotify("You got data!", "info");
      $('button[type="submit"]').removeAttr('disabled');
    });

    $('#mgrUpdatePlannerBtn').click(function () {
      var data = updatePlanner.setUpdatedData();
      console.log(data);
      APIS.eplanners.updateEplanner($('#mgrUpdatePlannerId').val(), data, null, function (err, response) {
        $('button[type="submit"]').removeAttr('disabled');
        if (!err) {
          userNotify("Planner Data Updated!", "success");
        } else {
          userNotify("Error! Something went wrong!", "danger");
        }
      });
    });

    $('#mgrUpdatePlannerResetBtn').click(function () {
      updatePlanner.reset();
      userNotify("Form has been reset", "info");
    });
  },
  setUpdatedData: function () {
    var planner = {};
    if (!_.isEmpty($('#mgrUpdatePlannerName').val())) {
      planner.name = $('#mgrUpdatePlannerName').val();
    }
    planner.address = $('#mgrUpdatePlannerAddress').val();
    planner.sub_area = $('#mgrUpdatePlannerLocality').val();
    planner.sub_area_seo = planner.sub_area.replace(/ /g, '-').toLowerCase();
    planner.city = $('#mgrUpdatePlannerCity').val();
    planner.location = {
      latitude: $('#mgrUpdatePlannerLat').val(),
      longitude: $('#mgrUpdatePlannerLong').val()
    };
    planner.url = $('#mgrUpdatePlannerURL').val();
    planner.description = $('#mgrUpdatePlannerDescription').val();
    planner.shortDescription = $('#mgrUpdatePlannerShortDescription').val();
    planner.website = $('#mgrUpdatePlannerWebsite').val();
    planner.contact = {
      name: $('#mgrUpdatePlannerContactName').val(),
      phone: $('#mgrUpdatePlannerContactNum').val(),
      email: $('#mgrUpdatePlannerContactEmail').val()
    };
    var phone = $('#mgrUpdatePlannerPhone').val();
    planner.phone = phone.split(',');
    planner.team_size = parseInt($('#mgrUpdatePlannerTeamSize').val());
    planner.approved = $('#mgrUpdatePlannerApprove').val();
    planner.hotel_deals = $('#mgrUpdatePlannerHotelDeals').val();
    planner.priority = parseInt($('#mgrUpdatePlannerPriority').val());
    planner.rating = parseFloat($('#mgrUpdatePlannerRating').val());
    planner.core_services = $('#mgrUpdatePlannerServices').val();
    planner.suitable_occasions = $('#mgrUpdatePlannerOccasions').val();
    planner.additional_services = $('#mgrUpdatePlannerExtras').val();
    var images = $('#mgrUpdatePlannerImages').val();
    planner.images = images.split(',');
    planner.packages = [];
    var items = $('.planner-pack-group');
    $.each(items, function (i, item) {
      var name = $(item).find('.planner-pack-name').val();
      var price = $(item).find('.planner-pack-price').val();
      if (!_.isEmpty(name) && !_.isEmpty(price)) {
        planner.packages.push({
          name: name,
          price: price
        });
      }
    });
    return (planner);
  },
  fromObjectToArray: function (data) {
    var data1 = data;
    var array1 = data1.split(',');
    return array1;
  },
  reset: function () {
    $('#mgrUpdatePlannerName').val('');
    $('#mgrUpdatePlannerAddress').val('');
    $('#mgrUpdatePlannerLocality').val('');
    $('#mgrUpdatePlannerCity').val('');
    $('#mgrUpdatePlannerLat').val('');
    $('#mgrUpdatePlannerLong').val('');
    $('#mgrUpdatePlannerURL').val('');
    $('#mgrUpdatePlannerDescription').val('');
    $('#mgrUpdatePlannerShortDescription').val('');
    $('#mgrUpdatePlannerWebsite').val('');
    $('#mgrUpdatePlannerPhone').val('');
    $('#mgrUpdatePlannerContactName').val('');
    $('#mgrUpdatePlannerContactNum').val('');
    $('#mgrUpdatePlannerTeamSize').val('');
    $('#mgrUpdatePlannerContactEmail').val('');
    $('#mgrUpdatePlannerApprove').val('false');
    $('#mgrUpdatePlannerHotelDeals').val('false');
    $('#mgrUpdatePlannerRating').val('');
    $('#mgrUpdatePlannerPriority').val('');
    $('#mgrUpdatePlannerImages').val('');
    $('#mgrUpdatePlannerServices').multiSelect('deselect_all');
    $('#mgrUpdatePlannerOccasions').multiSelect('deselect_all');
    $('#mgrUpdatePlannerExtras').multiSelect('deselect_all');
    var items = $('.planner-pack-group');
    $.each(items, function (i, item) {
      $(item).find('.planner-pack-name').val('');
      $(item).find('.planner-pack-price').val('');
    });
  }
};

var addPhotographer = {
  init: function () {
    $('.multi-select2').multiSelect({keepOrder: true});
    $('#mgrPhotographerResetBtn').click(function () {
      addPhotographer.reset();
    });
    $('#mgrCreatePhotographerBtn').click(function () {
      var photographer = {};
      if (!_.isEmpty($('#mgrAddPhotographerName').val())) {
        photographer.name = $('#mgrAddPhotographerName').val();
      }
      photographer.address = $('#mgrAddPhotographerAddress').val();
      photographer.sub_area = $('#mgrAddPhotographerLocality').val();
      photographer.sub_area_seo = photographer.sub_area.replace(/ /g, '-').toLowerCase();
      photographer.city = $('#mgrAddPhotographerCity').val();
      photographer.location = {
        latitude: $('#mgrAddPhotographerLat').val(),
        longitude: $('#mgrAddPhotographerLong').val()
      };
      photographer.url = $('#mgrAddPhotographerURL').val();
      photographer.description = $('#mgrAddPhotographerDescription').val();
      photographer.shortDescription = $('#mgrAddPhotographerShortDescription').val();
      photographer.website = $('#mgrAddPhotographerWebsite').val();
      photographer.contact = {
        name: $('#mgrAddPhotographerContactName').val(),
        phone: $('#mgrAddPhotographerContactNum').val(),
        email: $('#mgrAddPhotographerContactEmail').val()
      };
      var phone = $('#mgrAddPhotographerPhone').val();
      photographer.phone = phone.split(',');
      photographer.team_size = parseInt($('#mgrAddPhotographerTeamSize').val());
      photographer.approved = $('#mgrAddPhotographerApprove').val();
      photographer.studio_available = $('#mgrAddPhotographerStudio').val();
      photographer.priority = parseInt($('#mgrAddPhotographerPriority').val());
      photographer.rating = parseFloat($('#mgrAddPhotographerRating').val());
      photographer.videography = $('#mgrAddPhotographerVideotypes').val();
      photographer.videoservices = $('#mgrAddPhotographerVideoservices').val();
      photographer.suitable_occasions = $('#mgrAddPhotographerOccasions').val();
      photographer.photographyTypes = $('#mgrAddPhotographerPhototypes').val();
      var images = $('#mgrAddPhotographerImages').val();
      photographer.images = images.split(',');
      photographer.packages = [];
      var items = $('.photographer-pack-group');
      $.each(items, function (i, item) {
        var name = $(item).find('.photographer-pack-name').val();
        var price = $(item).find('.photographer-pack-price').val();
        if (!_.isEmpty(name) && !_.isEmpty(price)) {
          photographer.packages.push({
            name: name,
            price: price
          });
        }
      });
      console.log(photographer);
      $('#mgrCreatePhotographerBtn').attr('disabled', 'disabled');
      APIS.photographers.addPhotographer(photographer, null, function (err, photographer) {
        $('#mgrCreatePhotographerBtn').removeAttr('disabled');
        if (!err) {
          userNotify("photographer has been created!", "success");
        } else {
          userNotify("Error! Something went wrong.", "danger");
        }
      });

    });
  },
  reset: function () {
    $('#mgrAddPhotographerName').val('');
    $('#mgrAddPhotographerAddress').val('');
    $('#mgrAddPhotographerLocality').val('');
    $('#mgrAddPhotographerCity').val('');
    $('#mgrAddPhotographerLat').val('');
    $('#mgrAddPhotographerLong').val('');
    $('#mgrAddPhotographerURL').val('');
    $('#mgrAddPhotographerDescription').val('');
    $('#mgrAddPhotographerShortDescription').val('');
    $('#mgrAddPhotographerWebsite').val('');
    $('#mgrAddPhotographerPhone').val('');
    $('#mgrAddPhotographerContactName').val('');
    $('#mgrAddPhotographerContactNum').val('');
    $('#mgrAddPhotographerTeamSize').val('');
    $('#mgrAddPhotographerContactEmail').val('');
    $('#mgrAddPhotographerApprove').val('false');
    $('#mgrAddPhotographerStudio').val('false');
    $('#mgrAddPhotographerRating').val('');
    $('#mgrAddPhotographerPriority').val('');
    $('#mgrAddPhotographerImages').val('');
    $('#mgrAddPhotographerVideotypes').multiSelect('deselect_all');
    $('#mgrAddPhotographerVideoservices').multiSelect('deselect_all');
    $('#mgrAddPhotographerOccasions').multiSelect('deselect_all');
    $('#mgrAddPhotographerPhototypes').multiSelect('deselect_all');
    var items = $('.photographer-pack-group');
    $.each(items, function (i, item) {
      $(item).find('.photographer-pack-name').val('');
      $(item).find('.photographer-pack-price').val('');
    });
  },
  addpack: function () {
    var newEl = "<div class='col-md-6'><div class='panel panel-default show'> <div class='panel-heading'><h2>Pack Item</h2> <button href='#' class=' btn btn-danger pull-right' role='button' style='margin: 1%;' onclick='addPhotographer.delpack(this);'> <i class='fa fa-trash-o'></i> </button> </div> <div class='panel-body'> <form action='' class='form-horizontal row-border photographer-pack-group'> <div class='form-group'> <label class='col-sm-2 control-label'>Pack Title</label> <div class='col-sm-8'> <input class='form-control photographer-pack-name' placeholder='Pack Name' type='text'> </div> </div> <div class='form-group'> <label class='col-sm-2 control-label'>Pack Price</label> <div class='col-sm-8'> <input class='form-control photographer-pack-price' placeholder='1200' type='text'> </div> </div></form> </div> </div> </div>";
    $("#photographerPackContainer").append(newEl);
  },
  delpack: function (el) {
    console.log(el);
    var jqEl = $(el);
    var tag = jqEl.parent().parent().parent();
    console.log(tag);
    tag.remove();
  }
};

var updatePhotographer = {
  init: function () {
    $('.multi-select2').multiSelect({keepOrder: true});

    $('#mgrGetPhotographerByIdBtn').click(function () {
      var photographerId = $('#mgrUpdatePhotographerId').val();
      $('button[type="submit"]').attr('disabled', 'disabled');
      $('#updatedPhotographerDataContainer').load('/manager/vendors/photographer/' + photographerId + '/updatedata');
      var occArray = $('#mgrUpdateOccasions').val().split(',');
      var photArray = $('#mgrUpdatePhototypes').val().split(',');
      var vidArray = $('#mgrUpdateVideotypes').val().split(',');
      var servArray = $('#mgrUpdateVideoservices').val().split(',');
      $('#mgrUpdatePhotographerOccasions').multiSelect('select', occArray);
      $('#mgrUpdatePhotographerPhototypes').multiSelect('select', photArray);
      $('#mgrUpdatePhotographerVideotypes').multiSelect('select', vidArray);
      $('#mgrUpdatePhotographerVideoservices').multiSelect('select', servArray);
      userNotify("You got data!", "info");
      $('button[type="submit"]').removeAttr('disabled');
    });

    $('#mgrUpdatePhotographerBtn').click(function () {
      var data = updatePhotographer.setUpdatedData();
      console.log(data);
      APIS.photographers.updatePhotographer($('#mgrUpdatePhotographerId').val(), data, null, function (err, response) {
        $('button[type="submit"]').removeAttr('disabled');
        if (!err) {
          userNotify("Photographer Data Updated!", "success");
        } else {
          userNotify("Error! Something went wrong!", "danger");
        }
      });
    });

    $('#mgrUpdatePhotographerResetBtn').click(function () {
      updatePhotographer.reset();
      userNotify("Form has been reset", "info");
    });
  },
  setUpdatedData: function () {
    var photographer = {};
    if (!_.isEmpty($('#mgrUpdatePhotographerName').val())) {
      photographer.name = $('#mgrUpdatePhotographerName').val();
    }
    photographer.address = $('#mgrUpdatePhotographerAddress').val();
    photographer.sub_area = $('#mgrUpdatePhotographerLocality').val();
    photographer.sub_area_seo = photographer.sub_area.replace(/ /g, '-').toLowerCase();
    photographer.city = $('#mgrUpdatePhotographerCity').val();
    photographer.location = {
      latitude: $('#mgrUpdatePhotographerLat').val(),
      longitude: $('#mgrUpdatePhotographerLong').val()
    };
    photographer.url = $('#mgrUpdatePhotographerURL').val();
    photographer.description = $('#mgrUpdatePhotographerDescription').val();
    photographer.shortDescription = $('#mgrUpdatePhotographerShortDescription').val();
    photographer.website = $('#mgrUpdatePhotographerWebsite').val();
    photographer.contact = {
      name: $('#mgrUpdatePhotographerContactName').val(),
      phone: $('#mgrUpdatePhotographerContactNum').val(),
      email: $('#mgrUpdatePhotographerContactEmail').val()
    };
    var phone = $('#mgrUpdatePhotographerPhone').val();
    photographer.phone = phone.split(',');
    photographer.team_size = parseInt($('#mgrUpdatePhotographerTeamSize').val());
    photographer.approved = $('#mgrUpdatePhotographerApprove').val();
    photographer.studio_available = $('#mgrUpdatePhotographerStudio').val();
    photographer.priority = parseInt($('#mgrUpdatePhotographerPriority').val());
    photographer.rating = parseFloat($('#mgrUpdatePhotographerRating').val());
    photographer.videography = $('#mgrUpdatePhotographerVideotypes').val();
    photographer.videoservices = $('#mgrUpdatePhotographerVideoservices').val();
    photographer.suitable_occasions = $('#mgrUpdatePhotographerOccasions').val();
    photographer.photographyTypes = $('#mgrUpdatePhotographerPhototypes').val();
    var images = $('#mgrUpdatePhotographerImages').val();
    photographer.images = images.split(',');
    photographer.packages = [];
    var items = $('.photographer-pack-group');
    $.each(items, function (i, item) {
      var name = $(item).find('.photographer-pack-name').val();
      var price = $(item).find('.photographer-pack-price').val();
      if (!_.isEmpty(name) && !_.isEmpty(price)) {
        photographer.packages.push({
          name: name,
          price: price
        });
      }
    });
    return (photographer);
  },
  fromObjectToArray: function (data) {
    var data1 = data;
    var array1 = data1.split(',');
    return array1;
  },
  reset: function () {
    $('#mgrUpdatePhotographerName').val('');
    $('#mgrUpdatePhotographerAddress').val('');
    $('#mgrUpdatePhotographerLocality').val('');
    $('#mgrUpdatePhotographerCity').val('');
    $('#mgrUpdatePhotographerLat').val('');
    $('#mgrUpdatePhotographerLong').val('');
    $('#mgrUpdatePhotographerURL').val('');
    $('#mgrUpdatePhotographerDescription').val('');
    $('#mgrUpdatePhotographerShortDescription').val('');
    $('#mgrAddPhotographerWebsite').val('');
    $('#mgrUpdatePhotographerPhone').val('');
    $('#mgrUpdatePhotographerContactName').val('');
    $('#mgrUpdatePhotographerContactNum').val('');
    $('#mgrUpdatePhotographerTeamSize').val('');
    $('#mgrUpdatePhotographerContactEmail').val('');
    $('#mgrUpdatePhotographerApprove').val('false');
    $('#mgrUpdatePhotographerStudio').val('false');
    $('#mgrUpdatePhotographerRating').val('');
    $('#mgrUpdatePhotographerPriority').val('');
    $('#mgrUpdatePhotographerImages').val('');
    $('#mgrUpdatePhotographerVideotypes').multiSelect('deselect_all');
    $('#mgrUpdatePhotographerVideoservices').multiSelect('deselect_all');
    $('#mgrUpdatePhotographerOccasions').multiSelect('deselect_all');
    $('#mgrUpdatePhotographerPhototypes').multiSelect('deselect_all');
    var items = $('.photographer-pack-group');
    $.each(items, function (i, item) {
      $(item).find('.photographer-pack-name').val('');
      $(item).find('.photographer-pack-price').val('');
    });
  }
};

var addMakeUpArtist = {
  init: function () {
    $('.multi-select2').multiSelect({keepOrder: true});
    $('#mgrMakeUpArtistResetBtn').click(function () {
      addMakeUpArtist.reset();
    });
    $('#mgrCreateMakeUpArtistBtn').click(function () {
      var makeUpArtist = {};
      if (!_.isEmpty($('#mgrAddMakeUpArtistName').val())) {
        makeUpArtist.name = $('#mgrAddMakeUpArtistName').val();
      }
      makeUpArtist.address = $('#mgrAddMakeUpArtistAddress').val();
      makeUpArtist.sub_area = $('#mgrAddMakeUpArtistLocality').val();
      makeUpArtist.sub_area_seo = makeUpArtist.sub_area.replace(/ /g, '-').toLowerCase();
      makeUpArtist.city = $('#mgrAddMakeUpArtistCity').val();
      makeUpArtist.location = {
        latitude: $('#mgrAddMakeUpArtistLat').val(),
        longitude: $('#mgrAddMakeUpArtistLong').val()
      };
      makeUpArtist.url = $('#mgrAddMakeUpArtistURL').val();
      makeUpArtist.description = $('#mgrAddMakeUpArtistDescription').val();
      makeUpArtist.shortDescription = $('#mgrAddMakeUpArtistShortDescription').val();
      makeUpArtist.website = $('#mgrAddMakeUpArtistWebsite').val();
      makeUpArtist.contact = {
        name: $('#mgrAddMakeUpArtistContactName').val(),
        phone: $('#mgrAddMakeUpArtistContactNum').val(),
        email: $('#mgrAddMakeUpArtistContactEmail').val()
      };
      var phone = $('#mgrAddMakeUpArtistPhone').val();
      makeUpArtist.phone = phone.split(',');
      makeUpArtist.team_size = parseInt($('#mgrAddMakeUpArtistTeamSize').val());
      makeUpArtist.approved = $('#mgrAddMakeUpArtistApprove').val();
      makeUpArtist.priority = parseInt($('#mgrAddMakeUpArtistPriority').val());
      makeUpArtist.rating = parseFloat($('#mgrAddMakeUpArtistRating').val());
      makeUpArtist.videography = $('#mgrAddMakeUpArtistVideotypes').val();
      makeUpArtist.suitable_occasions = $('#mgrAddMakeUpArtistOccasions').val();
      makeUpArtist.photographyTypes = $('#mgrAddMakeUpArtistPhototypes').val();
      var images = $('#mgrAddMakeUpArtistImages').val();
      makeUpArtist.images = images.split(',');
      var services = $('#mgrAddMakeUpArtistServices').val();
      makeUpArtist.services = services.split(',');
      console.log(makeUpArtist);
      $('#mgrCreateMakeUpArtistBtn').attr('disabled', 'disabled');
      APIS.makeupartists.addMakeupartist(makeUpArtist, null, function (err, makeUpArtist) {
        $('#mgrCreateMakeUpArtistBtn').removeAttr('disabled');
        if (!err) {
          userNotify("makeUpArtist has been created!", "success");
        } else {
          userNotify("Error! Something went wrong.", "danger");
        }
      });

    });
  },
  reset: function () {
    $('#mgrAddMakeUpArtistName').val('');
    $('#mgrAddMakeUpArtistAddress').val('');
    $('#mgrAddMakeUpArtistLocality').val('');
    $('#mgrAddMakeUpArtistCity').val('');
    $('#mgrAddMakeUpArtistLat').val('');
    $('#mgrAddMakeUpArtistLong').val('');
    $('#mgrAddMakeUpArtistURL').val('');
    $('#mgrAddMakeUpArtistDescription').val('');
    $('#mgrAddMakeUpArtistShortDescription').val('');
    $('#mgrAddMakeUpArtistWebsite').val('');
    $('#mgrAddMakeUpArtistPhone').val('');
    $('#mgrAddMakeUpArtistContactName').val('');
    $('#mgrAddMakeUpArtistContactNum').val('');
    $('#mgrAddMakeUpArtistTeamSize').val('');
    $('#mgrAddMakeUpArtistContactEmail').val('');
    $('#mgrAddMakeUpArtistApprove').val('false');
    $('#mgrAddMakeUpArtistRating').val('');
    $('#mgrAddMakeUpArtistPriority').val('');
    $('#mgrAddMakeUpArtistImages').val('');
    $('#mgrAddMakeUpArtistServices').val('');
    $('#mgrAddMakeUpArtistOccasions').multiSelect('deselect_all');
  }
};

var updateMakeUpArtist = {
  init: function () {
    $('.multi-select2').multiSelect({keepOrder: true});

    $('#mgrGetMakeUpArtistByIdBtn').click(function () {
      var makeupartistId = $('#mgrUpdateMakeUpArtistId').val();
      $('button[type="submit"]').attr('disabled', 'disabled');
      $('#updatedMakeUpArtistDataContainer').load('/manager/vendors/makeupartist/' + makeupartistId + '/updatedata');
      var occArray = $('#mgrUpdateOccasions').val().split(',');
      $('#mgrUpdateMakeUpArtistOccasions').multiSelect('select', occArray);
      userNotify("You got data!", "info");
      $('button[type="submit"]').removeAttr('disabled');
    });

    $('#mgrUpdateMakeUpArtistBtn').click(function () {
      var data = updateMakeUpArtist.setUpdatedData();
      console.log(data);
      APIS.makeupartists.updateMakeupartist($('#mgrUpdateMakeUpArtistId').val(), data, null, function (err, response) {
        $('button[type="submit"]').removeAttr('disabled');
        if (!err) {
          userNotify("MakeUpArtist Data Updated!", "success");
        } else {
          userNotify("Error! Something went wrong!", "danger");
        }
      });
    });

    $('#mgrUpdateMakeUpArtistResetBtn').click(function () {
      updateMakeUpArtist.reset();
      userNotify("Form has been reset", "info");
    });
  },
  setUpdatedData: function () {
    var makeupartist = {};
    if (!_.isEmpty($('#mgrUpdateMakeUpArtistName').val())) {
      makeupartist.name = $('#mgrUpdateMakeUpArtistName').val();
    }
    makeupartist.address = $('#mgrUpdateMakeUpArtistAddress').val();
    makeupartist.sub_area = $('#mgrUpdateMakeUpArtistLocality').val();
    makeupartist.sub_area_seo = makeupartist.sub_area.replace(/ /g, '-').toLowerCase();
    makeupartist.city = $('#mgrUpdateMakeUpArtistCity').val();
    makeupartist.location = {
      latitude: $('#mgrUpdateMakeUpArtistLat').val(),
      longitude: $('#mgrUpdateMakeUpArtistLong').val()
    };
    makeupartist.url = $('#mgrUpdateMakeUpArtistURL').val();
    makeupartist.description = $('#mgrUpdateMakeUpArtistDescription').val();
    makeupartist.shortDescription = $('#mgrUpdateMakeUpArtistShortDescription').val();
    makeupartist.website = $('#mgrUpdateMakeUpArtistWebsite').val();
    makeupartist.contact = {
      name: $('#mgrUpdateMakeUpArtistContactName').val(),
      phone: $('#mgrUpdateMakeUpArtistContactNum').val(),
      email: $('#mgrUpdateMakeUpArtistContactEmail').val()
    };
    var phone = $('#mgrUpdateMakeUpArtistPhone').val();
    makeupartist.phone = phone.split(',');
    makeupartist.team_size = parseInt($('#mgrUpdateMakeUpArtistTeamSize').val());
    makeupartist.approved = $('#mgrUpdateMakeUpArtistApprove').val();
    makeupartist.priority = parseInt($('#mgrUpdateMakeUpArtistPriority').val());
    makeupartist.rating = parseFloat($('#mgrUpdateMakeUpArtistRating').val());
    makeupartist.suitable_occasions = $('#mgrUpdateMakeUpArtistOccasions').val();
    var images = $('#mgrUpdateMakeUpArtistImages').val();
    makeupartist.images = images.split(',');
    var services = $('#mgrUpdateMakeUpArtistServices').val();
    makeupartist.services = services.split(',');
    return (makeupartist);
  },
  fromObjectToArray: function (data) {
    var data1 = data;
    var array1 = data1.split(',');
    return array1;
  },
  reset: function () {
    $('#mgrUpdateMakeUpArtistName').val('');
    $('#mgrUpdateMakeUpArtistAddress').val('');
    $('#mgrUpdateMakeUpArtistLocality').val('');
    $('#mgrUpdateMakeUpArtistCity').val('');
    $('#mgrUpdateMakeUpArtistLat').val('');
    $('#mgrUpdateMakeUpArtistLong').val('');
    $('#mgrUpdateMakeUpArtistURL').val('');
    $('#mgrUpdateMakeUpArtistDescription').val('');
    $('#mgrUpdateMakeUpArtistShortDescription').val('');
    $('#mgrUpdateMakeUpArtistWebsite').val('');
    $('#mgrUpdateMakeUpArtistPhone').val('');
    $('#mgrUpdateMakeUpArtistContactName').val('');
    $('#mgrUpdateMakeUpArtistContactNum').val('');
    $('#mgrUpdateMakeUpArtistTeamSize').val('');
    $('#mgrUpdateMakeUpArtistContactEmail').val('');
    $('#mgrUpdateMakeUpArtistApprove').val('false');
    $('#mgrUpdateMakeUpArtistRating').val('');
    $('#mgrUpdateMakeUpArtistPriority').val('');
    $('#mgrUpdateMakeUpArtistImages').val('');
    $('#mgrUpdateMakeUpArtistServices').val('');
    $('#mgrUpdateMakeUpArtistOccasions').multiSelect('deselect_all');
  }
};

var addExpressbookPackage = {
  init: function () {
    $('.multi-select2').multiSelect({keepOrder: true});
    $('#mgrLinkVenueToExpBookBtn').click(function () {
      $('#mgrVenueData').load('/manager/expressbook/' + $('#mgrAddExpVenueId').val() + '/venuedetails');
//$('#mgrMenuPkgCloneList').load('/manager/expressbook/' + $('#mgrAddExpVenueId').val() + '/packagelist');
    });

    $('#mgrAddExpCreateBtn').click(function () {
      var expbook = {};
      expbook.name = $('#mgrAddExpName').val();
      expbook.url = $('#mgrAddExpUrl').val();
      expbook.venueId = $('#mgrAddExpVenueId').val();
// expbook.price1 = parseFloat($('#mgrAddExpPackagePrice1').val());
// expbook.price2 = parseFloat($('#mgrAddExpPackagePrice2').val());
// expbook.price3 = parseFloat($('#mgrAddExpPackagePrice3').val());
// expbook.price4 = parseFloat($('#mgrAddExpPackagePrice4').val());
// expbook.price5 = parseFloat($('#mgrAddExpPackagePrice5').val());
// expbook.price6 = parseFloat($('#mgrAddExpPackagePrice6').val());
// expbook.price7 = parseFloat($('#mgrAddExpPackagePrice7').val());
      expbook.contact = {
        name: $('#mgrAddExpContactName').val(),
        phone: $('#mgrAddExpContactNum').val(),
        email: $('#mgrAddExpContactEmail').val()
      };
// expbook.description = $('#mgrAddExpDescription').val();
// expbook.shortDescription = $('#mgrAddExpShortDescription').val();
// expbook.metaDescription = $('#mgrAddExpMetaDescription').val();
// expbook.package_duration = $('#mgrAddExpPackageDuration').val();
// expbook.capacity = parseInt($('#mgrAddExpCapacity').val());
// expbook.rating = parseFloat($('#mgrAddExpRating').val());
// expbook.approved = $('#mgrAddExpIsApproved').val();
// expbook.priority = parseInt($('#mgrAddExpPriority').val());
      expbook.location = {
        latitude: $('#mgrAddExpLatitude').val(),
        longitude: $('#mgrAddExpLongitude').val()
      };
      expbook.venueName = $('#mgrAddExpVenueName').val();
      expbook.venueAddress = $('#mgrAddExpAddress').val();
      expbook.sub_area = $('#mgrAddExpLocality').val();
      expbook.sub_area_seo = expbook.sub_area.replace(/ /g, '-').toLowerCase();
      expbook.city = $('#mgrAddExpCity').val();
// expbook.facilities = $('#mgrAddVenueAmenities').val();
// expbook.occasions = $('#mgrAddVenueOccasions').val();
// expbook.cuisines = $('#mgrAddVenueCuisines').val();
// expbook.venuetypes = $('#mgrAddVenuetypes').val();
// expbook.musictypes = $('#mgrAddMusictypes').val();
// expbook.packageType = $('#mgrAddPackagetypes').val();
// var tags = $('#mgrAddExpTags').val();
// expbook.keywords = tags.split(",");
// var timings = $('#mgrAddExpTimings').val();
// expbook.package_timings = timings.split(",");
// var images = $('#mgrAddExpImages').val();
// expbook.images = images.split(",");
// expbook.packitems = [];
// var items = $('.package-menu-detail');
// $.each(items, function (i, elem) {
//     var menuId = $(elem).find('.package-menu-id').val();
//     var menuName = $(elem).find('.package-menu-item-name').val();
//     var menuCount = $(elem).find('.package-menu-count').val();
//     if (!_.isEmpty(menuId) && !_.isEmpty(menuName)) {
//         expbook.packitems.push({
//             name: menuName,
//             uid: menuId,
//             count: menuCount
//         });
//     }
// });
      console.log(expbook);
      $('#mgrAddExpCreateBtn').attr('disabled', 'disabled');
      $.ajax({
        type: "POST",
        url: "/api/v1/expressbooks/",
        headers: null,
        data: expbook,
        success: function (response) {
          $('#mgrAddExpCreateBtn').removeAttr('disabled');
          userNotify("Package has been added!", "success");
        },
        error: function () {
          userNotify("Package could not be added!", "danger");
        }
      });
    });

    $('#mgrAddExpResetBtn').click(function () {
      addExpressbookPackage.reset();
      userNotify("Form has been reset!", "info");
    });
  },
  reset: function () {
    $('#mgrAddExpName').val('');
    $('#mgrAddExpUrl').val('');
    $('#mgrAddExpVenueId').val('');
//$('#mgrAddExpPackagePrice').val('');
    $('#mgrAddExpContactName').val('');
    $('#mgrAddExpContactNum').val('');
    $('#mgrAddExpContactEmail').val('');
// $('#mgrAddExpDescription').val('');
// $('#mgrAddExpShortDescription').val('');
// $('#mgrAddExpMetaDescription').val('');
// $('#mgrAddExpTags').val('');
// $('#mgrAddExpImages').val('');
// $('#mgrAddExpTimeSlots').val('');
// $('#mgrAddExpIsApproved').val('');
// $('#mgrAddExpPriority').val('No');
// $("#mgrMenuPkgList").html('');
// $('#mgrMenuPkgCloneList').html('');
  },
  addClonePack: function (el) {
    var elem = $(el);
    var packageId = elem.data('pack');
    var venueId = elem.data('venue');
    $.get('/manager/expressbook/venue/' + venueId + '/package/' + packageId + '/clone', function (data) {
      $("#mgrMenuPkgList").html(data);
    });
  },
  addNewPack: function () {
    $.get('/manager/expressbook/' + $('#mgrAddExpVenueId').val() + '/menunew', function (data) {
      $("#mgrMenuPkgList").html(data);
    });
  },
  delpack: function (el) {
    console.log(el);
    var jqEl = $(el);
    var tag = jqEl.parent().parent().parent();
    console.log(tag);
    tag.remove();
  }
};

var addBdayPackage = {
  init: function () {
    $('.expbday-section-body').summernote({
      height: 150,
      toolbar: [
        ['style', ['bold', 'italic', 'underline', 'clear']],
        ['font', ['strikethrough', 'superscript', 'subscript']],
        ['fontsize', ['fontsize']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['misc', ['fullscreen', 'codeview', 'undo', 'redo']]
      ]
    });
    $('#mgrAddExpBdayCreateBtn').click(function () {
      var pack = {};
      pack.name = $('#mgrAddExpBdayName').val();
      pack.url = $('#mgrAddExpBdayUrl').val();
      pack.price = parseFloat($('#mgrAddExpBdayPrice').val());
      pack.contact = {
        name: $('#mgrAddExpBdayContactName').val(),
        phone: $('#mgrAddExpBdayContactNum').val(),
        email: $('#mgrAddExpBdayContactEmail').val()
      };
      pack.shortDescription = $('#mgrAddExpBdayShortDescription').val();
      pack.metaDescription = $('#mgrAddExpBdayMetaDescription').val();
      var tags = $('#mgrAddExpBdayMetaKeywords').val();
      pack.keywords = tags.split(",");
      pack.package_time = $('#mgrAddExpBdaySetupTime').val();
      pack.package_duration = $('#mgrAddExpBdayDuration').val();
      pack.location = {
        latitude: $('#mgrAddExpBdayLatitude').val(),
        longitude: $('#mgrAddExpBdayLongitude').val()
      };
      pack.address = $('#mgrAddExpBdayAddress').val();
      pack.sub_area = $('#mgrAddExpBdayLocality').val();
      pack.sub_area_seo = pack.sub_area.replace(/ /g, '-').toLowerCase();
      pack.city = $('#mgrAddExpBdayCity').val();
      pack.rating = parseFloat($('#mgrAddExpBdayRating').val());
      pack.advance = parseInt($('#mgrAddExpBdayAdvance').val());
      pack.approved = $('#mgrAddExpBdayApprove').val();
      pack.priority = parseInt($('#mgrAddExpBdayPriority').val());
      pack.packitems = [];
      pack.sections = [];
      var items = $('.expbday-section-block');
      $.each(items, function (i, elem) {
        var heading = $(elem).find('.expbday-section-heading').val();
        var setup = $(elem).find('.expbday-section-type').val();
        var body = $(elem).find('.expbday-section-body').val();
        if (!_.isEmpty(heading) && !_.isEmpty(setup) && !_.isEmpty(body)) {
          var bodyArray = body.split(",");
          pack.sections.push({
            heading: heading,
            setup: setup,
            body: bodyArray
          });
        }
      });
      var things = $('.expbday-package-block');
      $.each(things, function (i, elem) {
        var name = $(elem).find('.expbday-package-name').val();
        var price = $(elem).find('.expbday-package-price').val();
        var id = $(elem).find('.expbday-package-id').val();
        var list = [];
        console.log(name, price, id);
        if (!_.isEmpty(name) && !_.isEmpty(price) && !_.isEmpty(id)) {
          var packs = $(elem).find('.expbday-package-item').each(function (j, packet) {
            list.push($(packet).val());
          });
          pack.packitems.push({
            name: name,
            price: price,
            id: id,
            list: list
          });
        }
      });
      console.log(pack);
      $('#mgrAddExpBdayCreateBtn').attr('disabled', 'disabled');
      $.ajax({
        type: "POST",
        url: "/api/v1/bdaypacks/",
        headers: null,
        data: pack,
        success: function (response) {
          $('#mgrAddExpBdayCreateBtn').removeAttr('disabled');
          userNotify("Package has been added!", "success");
        },
        error: function () {
          userNotify("Package could not be added!", "danger");
        }
      });
    });

    $('#mgrAddExpBdayResetBtn').click(function () {
      addBdayPackage.reset();
      userNotify("Form has been reset!", "info");
    });
  },
  reset: function () {
    $('#mgrAddExpName').val('');
    $('#mgrAddExpUrl').val('');
    $('#mgrAddExpVenueId').val('');
//$('#mgrAddExpPackagePrice').val('');
    $('#mgrAddExpContactName').val('');
    $('#mgrAddExpContactNum').val('');
    $('#mgrAddExpContactEmail').val('');
// $('#mgrAddExpDescription').val('');
// $('#mgrAddExpShortDescription').val('');
// $('#mgrAddExpMetaDescription').val('');
// $('#mgrAddExpTags').val('');
// $('#mgrAddExpImages').val('');
// $('#mgrAddExpTimeSlots').val('');
// $('#mgrAddExpIsApproved').val('');
// $('#mgrAddExpPriority').val('No');
// $("#mgrMenuPkgList").html('');
// $('#mgrMenuPkgCloneList').html('');
  },
  addNewSection: function () {
    var sectionCode = "<div class='col-lg-12 expbday-section-block'><div class='panel panel-default'><div class='panel-heading'><h3>Section <a class='btn btn-danger' onclick='addBdayPackage.delSectionElement(this);'><i class='fa fa-remove'></i></a></h3></div><div class='panel-body'><div class='form-horizontal row-border'><div class='form-group'> <label class='col-sm-2 control-label'>Section Heading</label><div class='col-sm-8'> <input class='expbday-section-heading form-control' type='text'></div></div><div class='form-group'> <label class='col-sm-2 control-label'>Section Type</label><div class='col-sm-2'><div class='select select-block input-zero-radius full-width'> <select class='expbday-section-type form-control'><option value='text' selected>Text</option><option value='html' >HTML</option> </select></div></div></div><div class='form-group'> <label class='col-sm-2 control-label'>Body</label><div class='col-sm-8'><textarea style='overflow: hidden; word-wrap: break-word; resize: horizontal; height: 60px;' class='expbday-section-body form-control autosize'></textarea></div><div class='col-sm-2'><p class='help-block'></p></div></div></div></div></div></div>";
    $('#mgrAddExpBdaySectionStack').append(sectionCode);
    $('.expbday-section-body').summernote({
      height: 150,
      toolbar: [
        ['style', ['bold', 'italic', 'underline', 'clear']],
        ['font', ['strikethrough', 'superscript', 'subscript']],
        ['fontsize', ['fontsize']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['misc', ['fullscreen', 'codeview', 'undo', 'redo']]
      ]
    });
  },
  addNewPackage: function () {
    var packageCode = "<div class='col-lg-6 expbday-package-block'><div class='panel panel-default'><div class='panel-heading'><h3>Package<a class='btn btn-danger pull-right' onclick='addBdayPackage.delPackageElement(this);'><i class='fa fa-remove'></i></a></h3></div><div class='panel-body' style='overflow-y: scroll; height: 400px;'><div class='form-horizontal row-border'><div class='form-group'> <label class='col-sm-2 control-label'>Name</label><div class='col-sm-8'> <input class='expbday-package-name form-control' type='text'></div></div><div class='form-group'> <label class='col-sm-2 control-label'>PackId</label><div class='col-sm-8'> <input class='expbday-package-id form-control' type='text'></div></div><div class='form-group'> <label class='col-sm-2 control-label'>Price</label><div class='col-sm-8'> <input class='expbday-package-price form-control' type='number'></div></div><div class='form-group'> <label class='col-sm-2 control-label'>Item</label><div class='col-sm-8'> <input class='expbday-package-item form-control' type='text'></div><div class='col-sm-2'> <a onclick='addBdayPackage.addNewPackRow(this);' class='btn btn-default' style='margin-right: 5px;'><i class='fa fa-plus fa-sm'></i></a></div></div></div></div></div></div>";
    $('#mgrAddExpBdayPackageStack').append(packageCode);
  },
  delSectionElement: function (el) {
    console.log(el);
    var jqEl = $(el);
    var tag = jqEl.parent().parent().parent();
    console.log(tag);
    tag.remove();
  },
  delPackageElement: function (el) {
    console.log(el);
    var jqEl = $(el);
    var tag = jqEl.parent().parent().parent().parent();
    console.log(tag);
    tag.remove();
  },
  addNewPackRow: function (el) {
    var packRowCode = "<div class='form-group'> <label class='col-sm-2 control-label'>Item</label><div class='col-sm-8'> <input class='expbday-package-item form-control' type='text'></div><div class='col-sm-2'> <a onclick='addBdayPackage.delPackRow(this);' class='btn btn-default' style='margin-right: 5px;'><i class='fa fa-minus fa-sm'></i></a></div></div>";
    var tempEl = $(el);
    var place = tempEl.parent().parent().parent().append(packRowCode);
  },
  delPackRow: function (el) {
    console.log(el);
    var jqEl = $(el);
    var tag = jqEl.parent().parent();
    console.log(tag);
    tag.remove();
  }
};

var addPartyPackage = {
  init: function () {
    $('#mgrAddExpPartyCreateBtn').click(function () {
      var pack = {};
      pack.name = $('#mgrAddExpPartyName').val();
      pack.url = $('#mgrAddExpPartyUrl').val();
      pack.category = $('#mgrAddExpPartyCategory').val();
      pack.price = parseFloat($('#mgrAddExpPartyPrice').val());
      pack.contact = {
        name: $('#mgrAddExpPartyContactName').val(),
        phone: $('#mgrAddExpPartyContactNum').val(),
        email: $('#mgrAddExpPartyContactEmail').val()
      };
      pack.shortDescription = $('#mgrAddExpPartyShortDescription').val();
      pack.metaDescription = $('#mgrAddExpPartyMetaDescription').val();
      var tags = $('#mgrAddExpPartyMetaKeywords').val();
      pack.keywords = tags.split(",");
      pack.package_time = $('#mgrAddExpPartySetupTime').val();
      pack.package_duration = $('#mgrAddExpPartyDuration').val();
      pack.location = {
        latitude: $('#mgrAddExpPartyLatitude').val(),
        longitude: $('#mgrAddExpPartyLongitude').val()
      };
      pack.address = $('#mgrAddExpPartyAddress').val();
      pack.sub_area = $('#mgrAddExpPartyLocality').val();
      pack.sub_area_seo = pack.sub_area.replace(/ /g, '-').toLowerCase();
      pack.city = $('#mgrAddExpPartyCity').val();
      pack.rating = parseFloat($('#mgrAddExpPartyRating').val());
      pack.advance = parseInt($('#mgrAddExpPartyAdvance').val());
      pack.approved = $('#mgrAddExpPartyApprove').val();
      pack.closed = $('#mgrAddExpPartyClose').val();
      pack.expired = $('#mgrAddExpPartyExpire').val();
      pack.couponApply = $('#mgrAddExpPartyCoupon').val();
      pack.priority = parseInt($('#mgrAddExpPartyPriority').val());
      $('#mgrAddExpPartyCreateBtn').attr('disabled', 'disabled');
      $.ajax({
        type: "POST",
        url: "/api/v1/partypacks/",
        headers: null,
        data: pack,
        success: function (response) {
          $('#mgrAddExpPartyCreateBtn').removeAttr('disabled');
          userNotify("Package has been added!", "success");
        },
        error: function () {
          userNotify("Package could not be added!", "danger");
        }
      });
    });

    $('#mgrAddExpPartyResetBtn').click(function () {
      addBdayPackage.reset();
      userNotify("Form has been reset!", "info");
    });
  },
  reset: function () {
    $('#mgrAddExpName').val('');
    $('#mgrAddExpUrl').val('');
    $('#mgrAddExpVenueId').val('');
//$('#mgrAddExpPackagePrice').val('');
    $('#mgrAddExpContactName').val('');
    $('#mgrAddExpContactNum').val('');
    $('#mgrAddExpContactEmail').val('');
// $('#mgrAddExpDescription').val('');
// $('#mgrAddExpShortDescription').val('');
// $('#mgrAddExpMetaDescription').val('');
// $('#mgrAddExpTags').val('');
// $('#mgrAddExpImages').val('');
// $('#mgrAddExpTimeSlots').val('');
// $('#mgrAddExpIsApproved').val('');
// $('#mgrAddExpPriority').val('No');
// $("#mgrMenuPkgList").html('');
// $('#mgrMenuPkgCloneList').html('');
  },
  addNewSection: function () {
    var sectionCode = "<div class='col-lg-12 expparty-section-block'><div class='panel panel-default'><div class='panel-heading'><h3>Section <a class='btn btn-danger' onclick='addPartyPackage.delSectionElement(this);'><i class='fa fa-remove'></i></a></h3></div><div class='panel-body'><div class='form-horizontal row-border'><div class='form-group'> <label class='col-sm-2 control-label'>Section Heading</label><div class='col-sm-8'> <input class='expparty-section-heading form-control' type='text'></div></div><div class='form-group'> <label class='col-sm-2 control-label'>Section Type</label><div class='col-sm-2'><div class='select select-block input-zero-radius full-width'> <select class='expparty-section-type form-control'><option value='text' selected>Text</option><option value='html' >HTML</option> </select></div></div></div><div class='form-group'> <label class='col-sm-2 control-label'>Body</label><div class='col-sm-8'><textarea style='overflow: hidden; word-wrap: break-word; resize: horizontal; height: 60px;' class='expparty-section-body form-control autosize'></textarea></div><div class='col-sm-2'><p class='help-block'></p></div></div></div></div></div></div>";
    $('#mgrAddExpPartySectionStack').append(sectionCode);
    $('.expparty-section-body').summernote({
      height: 150,
      toolbar: [
        ['style', ['bold', 'italic', 'underline', 'clear']],
        ['font', ['strikethrough', 'superscript', 'subscript']],
        ['fontsize', ['fontsize']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['misc', ['fullscreen', 'codeview', 'undo', 'redo']]
      ]
    });
  },
  addNewPackage: function () {
    var packageCode = "<div class='col-lg-6 expparty-package-block'><div class='panel panel-default'><div class='panel-heading'><h3>Package<a class='btn btn-danger pull-right' onclick='addPartyPackage.delPackageElement(this);'><i class='fa fa-remove'></i></a></h3></div><div class='panel-body' style='overflow-y: scroll; height: 400px;'><div class='form-horizontal row-border'><div class='form-group'> <label class='col-sm-2 control-label'>Name</label><div class='col-sm-8'> <input class='expparty-package-name form-control' type='text'></div></div><div class='form-group'> <label class='col-sm-2 control-label'>PackId</label><div class='col-sm-8'> <input class='expparty-package-id form-control' type='text'></div></div><div class='form-group'> <label class='col-sm-2 control-label'>Price</label><div class='col-sm-8'> <input class='expparty-package-price form-control' type='number'></div></div><div class='form-group'> <label class='col-sm-2 control-label'>Quantity</label><div class='col-sm-8'> <input class='expparty-package-qty form-control' type='number'></div></div><div class='form-group'> <label class='col-sm-2 control-label'>Show or Hide ?</label><div class='col-sm-4'><div class='select select-block input-zero-radius full-width'> <select class='expparty-package-show form-control'><option value='true' selected>Show</option><option value='false'>Hide</option> </select></div></div></div><div class='form-group'> <label class='col-sm-2 control-label'>Expires</label><div class='col-sm-8'> <input class='expparty-package-date form-control date-picker' type='text'></div></div><div class='form-group'> <label class='col-sm-2 control-label'>Item</label><div class='col-sm-8'> <input class='expparty-package-item form-control' type='text'></div><div class='col-sm-2'> <a onclick='addPartyPackage.addNewPackRow(this);' class='btn btn-default' style='margin-right: 5px;'><i class='fa fa-plus fa-sm'></i></a></div></div></div></div></div></div>";
    $('#mgrAddExpPartyPackageStack').append(packageCode);
  },
  delSectionElement: function (el) {
    console.log(el);
    var jqEl = $(el);
    var tag = jqEl.parent().parent().parent();
    console.log(tag);
    tag.remove();
  },
  delPackageElement: function (el) {
    console.log(el);
    var jqEl = $(el);
    var tag = jqEl.parent().parent().parent().parent();
    console.log(tag);
    tag.remove();
  },
  addNewPackRow: function (el) {
    var packRowCode = "<div class='form-group'> <label class='col-sm-2 control-label'>Item</label><div class='col-sm-8'> <input class='expparty-package-item form-control' type='text'></div><div class='col-sm-2'> <a onclick='addPartyPackage.delPackRow(this);' class='btn btn-default' style='margin-right: 5px;'><i class='fa fa-minus fa-sm'></i></a></div></div>";
    var tempEl = $(el);
    var place = tempEl.parent().parent().parent().append(packRowCode);
  },
  delPackRow: function (el) {
    console.log(el);
    var jqEl = $(el);
    var tag = jqEl.parent().parent();
    console.log(tag);
    tag.remove();
  }
};

var eventDateAnalytics = {
  init: function () {
    $('#datepicker-range').daterangepicker({todayHighlight: true});
    $('#venue-datepicker-range').daterangepicker({todayHighlight: true});
    $('#mgnAnalyticsDateBtn').click(function () {
      var data = {};
      data.dateArray = [];
      var startdate = $('#datepicker-range').data('daterangepicker').startDate._d;
      var enddate = $('#datepicker-range').data('daterangepicker').endDate._d;
      var currentDate = startdate;
      while (currentDate <= enddate) {
        data.dateArray.push(new Date(currentDate))
        currentDate.setDate(currentDate.getDate() + 1);
      }
      enddate.setDate(enddate.getDate() + 1);
      data.dateArray.push(enddate);
      APIS.events.getEventsByDateRange(data, function (err, response) {
        var results = [];
        var aggregate_count = {
          high: 0,
          medium: 0,
          low: 0,
          high_total: 0,
          medium_total: 0,
          low_total: 0,
          send_options: 0,
          option_sent: 0,
          follow_up: 0,
          send_details: 0,
          call_again: 0,
          not_verified: 0,
          converted: 0,
          not_converted: 0,
          postponed: 0,
          cancelled: 0,
          fake: 0,
          repeat: 0,
          total: 0
        };
        var chartdata = [];
        results = response.results;
        for (var i = 0; i < results.length; i++) {
          var count = {
            high: 0,
            medium: 0,
            low: 0,
            high_total: 0,
            medium_total: 0,
            low_total: 0,
            send_options: 0,
            option_sent: 0,
            follow_up: 0,
            send_details: 0,
            call_again: 0,
            not_verified: 0,
            converted: 0,
            not_converted: 0,
            postponed: 0,
            cancelled: 0,
            fake: 0,
            repeat: 0,
            total: 0
          };
          var devents = results[i].events;
          for (var k = 0; k < devents.length; k++) {
            if (devents[k].quality === 'High') {
              if (devents[k].status === 'New Enquiry') {
                count.high += 1;
              }
              if ((devents[k].status !== 'Fake') && (devents[k].status !== 'Repeat')) {
                count.high_total += 1;
              }
            } else if (devents[k].quality === 'Medium') {
              if (devents[k].status === 'New Enquiry') {
                count.medium += 1;
              }
              if ((devents[k].status !== 'Fake') && (devents[k].status !== 'Repeat')) {
                count.medium_total += 1;
              }
            } else if (devents[k].quality === 'Low') {
              if (devents[k].status === 'New Enquiry') {
                count.low += 1;
              }
              if ((devents[k].status !== 'Fake') && (devents[k].status !== 'Repeat')) {
                count.low_total += 1;
              }
            }
            if (devents[k].status === 'Send Options') {
              count.send_options += 1;
            } else if (devents[k].status === 'Options Sent') {
              count.option_sent += 1;
            } else if (devents[k].status === 'Follow Up') {
              count.follow_up += 1;
            } else if (devents[k].status === 'Send Details') {
              count.send_details += 1;
            } else if ((devents[k].status === 'Call Later') || devents[k].status === 'Did Not Pick') {
              count.call_again += 1;
            } else if (devents[k].status === 'New Enquiry') {
              count.not_verified += 1;
            } else if (devents[k].status === 'Converted') {
              count.converted += 1;
            } else if (devents[k].status === 'Not Converted') {
              count.not_converted += 1;
            } else if (devents[k].status === 'Postponed') {
              count.postponed += 1;
            } else if (devents[k].status === 'Cancelled') {
              count.cancelled += 1;
            } else if (devents[k].status === 'Fake') {
              count.fake += 1;
            } else if (devents[k].status === 'Repeat') {
              count.repeat += 1;
            }
          }
          count.total = devents.length - count.fake - count.repeat;
          results[i].count = count;
          var tempCount = count;
          var tempObj = {};
          for (var prop in tempCount) {
            aggregate_count[prop] += tempCount[prop];
            tempObj[prop] = tempCount[prop]
          }
          results[i].num = i + 1;
          var date = new Date(results[i].date);
          results[i].y = date.getFullYear();
          results[i].m = date.getMonth() + 1;
          results[i].d = date.getDate();
          tempObj.date = results[i].d + '-' + results[i].m;
          chartdata.push(tempObj);
        }
        var dustObj = {};
        console.log(results);
        console.log(aggregate_count);
        Morris.Donut({
          element: 'status-donut',
          data: [
            {label: "New Enquiry", value: aggregate_count.not_verified},
            {label: "Send Options", value: aggregate_count.send_options},
            {label: "Options Sent", value: aggregate_count.option_sent},
            {label: "Follow Up", value: aggregate_count.follow_up},
            {label: "Send Details", value: aggregate_count.send_details},
            {label: "Call Again", value: aggregate_count.call_again},
            {label: "Postponed", value: aggregate_count.postponed},
            {label: "Cancelled", value: aggregate_count.cancelled},
            {label: "Fake", value: aggregate_count.fake},
            {label: "Repeat", value: aggregate_count.repeat},
            {label: "Not Converted", value: aggregate_count.not_converted},
            {label: "Converted", value: aggregate_count.converted}
          ]
        });
        Morris.Donut({
          element: 'quality-donut',
          data: [
            {label: "High", value: aggregate_count.high_total},
            {label: "Medium", value: aggregate_count.medium_total},
            {label: "Low", value: aggregate_count.low_total}
          ],
          colors: ["#4caf50", "#ccc", "#000"]
        });
        Morris.Line({
          element: 'frequency-graph',
          data: chartdata,
          xkey: 'date',
          ykeys: ['not_verified', 'send_options', 'option_sent', 'follow_up', 'send_details', 'call_again', 'postponed', 'cancelled', 'fake', 'repeat', 'not_converted', 'converted'],
          labels: ['New Enquiry', 'Send Options', 'Options Sent', 'Follow Up', 'Send Details', 'Call Again', 'Postponed', 'Cancelled', 'Fake', 'Repeat', 'Not Converted', 'Converted']
        });
        dustObj.results = results;
        dust.render('date-analytics', dustObj, function (err, out) {
          if (err) console.log(err);
          $("#date-tables").html(out);
        });
        dust.render('date-analytics-quality', dustObj, function (err, out) {
          if (err) console.log(err);
          $("#date-tables-quality").html(out);
        });
      });
    });

    $('#mgnEventsDownloadBtn').click(function () {
      var data = {};
      data.dateArray = [];
      data.startdate = $('#datepicker-range').data('daterangepicker').startDate.toISOString();
      data.enddate = $('#datepicker-range').data('daterangepicker').endDate.toISOString();
      var textFields = $("#fields").val();
      data.fields = textFields.split(",");
      console.log(data);
      $.ajax({
        type: "POST",
        url: "/api/v3/analytics/daily-dump",
        data: data,
        success: function (response, status, xhr) {
          var filename = "";
          var disposition = xhr.getResponseHeader('Content-Disposition');
          if (disposition) {
            var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
            var matches = filenameRegex.exec(disposition);
            if (matches !== null && matches[1]) filename = matches[1].replace(/['"]/g, '');
          }
          var linkelem = document.createElement('a');
          try {
            var blob = new Blob([response], {type: 'application/octet-stream'});
            if (typeof window.navigator.msSaveBlob !== 'undefined') {
//   IE workaround for "HTML7007: One or more blob URLs were revoked by closing the blob
// for which they were created. These URLs will no longer resolve as the data backing the
// URL has been freed."
              window.navigator.msSaveBlob(blob, filename);
            } else {
              var URL = window.URL || window.webkitURL;
              var downloadUrl = URL.createObjectURL(blob);
              if (filename) {
// use HTML5 a[download] attribute to specify filename
                var a = document.createElement("a");
// safari doesn't support this yet
                if (typeof a.download === 'undefined') {
                  window.location = downloadUrl;
                } else {
                  a.href = downloadUrl;
                  a.download = filename;
                  document.body.appendChild(a);
                  a.target = "_blank";
                  a.click();
                }
              } else {
                window.location = downloadUrl;
              }
            }
          } catch (ex) {
            console.log(ex);
          }
        }
      });
    });

    $('#mgnVenuesDownloadBtn').click(function () {
      var data = {};
      data.dateArray = [];
      data.startdate = $('#venue-datepicker-range').data('daterangepicker').startDate.toISOString();
      data.enddate = $('#venue-datepicker-range').data('daterangepicker').endDate.toISOString();
      var textFields = $("#venue-fields").val();
      data.fields = textFields.split(",");
      console.log(data);
      $.ajax({
        type: "POST",
        url: "/api/v3/analytics/venue-dump",
        data: data,
        success: function (response, status, xhr) {
          var filename = "";
          var disposition = xhr.getResponseHeader('Content-Disposition');
          if (disposition) {
            var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
            var matches = filenameRegex.exec(disposition);
            if (matches !== null && matches[1]) filename = matches[1].replace(/['"]/g, '');
          }
          var linkelem = document.createElement('a');
          try {
            var blob = new Blob([response], {type: 'application/octet-stream'});
            if (typeof window.navigator.msSaveBlob !== 'undefined') {
//   IE workaround for "HTML7007: One or more blob URLs were revoked by closing the blob
// for which they were created. These URLs will no longer resolve as the data backing the
// URL has been freed."
              window.navigator.msSaveBlob(blob, filename);
            } else {
              var URL = window.URL || window.webkitURL;
              var downloadUrl = URL.createObjectURL(blob);
              if (filename) {
// use HTML5 a[download] attribute to specify filename
                var a = document.createElement("a");
// safari doesn't support this yet
                if (typeof a.download === 'undefined') {
                  window.location = downloadUrl;
                } else {
                  a.href = downloadUrl;
                  a.download = filename;
                  document.body.appendChild(a);
                  a.target = "_blank";
                  a.click();
                }
              } else {
                window.location = downloadUrl;
              }
            }
          } catch (ex) {
            console.log(ex);
          }
        }
      });
    });
  }
};

var kanbanView = {
  init: function () {
    $('#mgnAnalyticsDateBtn').click(function () {
      var data = {
        mindate: $('#datepicker-range').data('daterangepicker').startDate._d.toISOString(),
        maxdate: $('#datepicker-range').data('daterangepicker').endDate._d.toISOString()
      };
      APIS.events.getEventsByMinMaxDate(data, function (err, response) {
        if (!err) {
          var results = [];
          var aggregate_array = {
            new_enquiry: [],
            send_options: [],
            options_sent: [],
            follow_up: [],
            send_details: [],
            call_later: [],
            did_not_pick: [],
            converted: [],
            not_converted: [],
            postponed: [],
            cancelled: []
          };
          results = response.events;
          for (var i = 0; i < results.length; i++) {
            if (results[i].status === 'New Enquiry') {
              aggregate_array.new_enquiry.push(results[i]);
            } else if (results[i].status === 'Send Options') {
              aggregate_array.send_options.push(results[i]);
            } else if (results[i].status === 'Options Sent') {
              aggregate_array.options_sent.push(results[i]);
            } else if (results[i].status === 'Follow Up') {
              aggregate_array.follow_up.push(results[i]);
            } else if (results[i].status === 'Send Details') {
              aggregate_array.send_details.push(results[i]);
            } else if (results[i].status === 'Call Later') {
              aggregate_array.call_later.push(results[i]);
            } else if (results[i].status === 'Did Not Pick') {
              aggregate_array.did_not_pick.push(results[i]);
            } else if (results[i].status === 'Converted') {
              aggregate_array.converted.push(results[i]);
            } else if (results[i].status === 'Not Converted') {
              aggregate_array.not_converted.push(results[i]);
            } else if (results[i].status === 'Postponed') {
              aggregate_array.postponed.push(results[i]);
            } else if (results[i].status === 'Cancelled') {
              aggregate_array.cancelled.push(results[i]);
            }
          }
          dust.render('kanban-view', aggregate_array, function (err, out) {
            if (err) console.log(err);
            else {
              $("#kanban-segment").html(out);
            }
          });
        } else {
          userNotify('Please refresh the page and retry!', 'danger');
        }
      });
    });
  }
};

var calendarView = {
  init: function () {
    $('#calendar-segment').fullCalendar({
      header: {
        left: 'prev,next',
        center: 'title',
        right: 'today'
      },
      defaultDate: new Date().toISOString(),
      navLinks: false, // can click day/week names to navigate views
      editable: false,
      eventLimit: true, // allow "more" link when too many events
      events: function (start, end, timezone, callback) {
        var data = {
          "mindate": start.toISOString(),
          "maxdate": end.toISOString()
        };
        $.ajax({
          url: "/api/v2/events/calendar/",
          type: "POST",
          headers: null,
          data: data,
          success: function (response) {
            var events = [];
            if (response.data && response.data.orders.length > 0) {
              var items = response.data.orders;
              for (var i = 0; i < items.length; i++) {
                for (var j = 0; j < items[i].status.length; j++) {
                  events.push({
                    id: items[i]._id,
                    title: items[i].status[j].status + ' - ' + items[i].status[j].count,
                    start: new Date(items[i]._id),
                    status: items[i].status[j].status,
                    count: items[i].status[j].count,
                    allDay: true
                  });
                }
              }
            }
            console.log(events);
            callback(events);
          },
          error: function (resp) {
            console.log(resp);
          }
        });
      },
      dayClick: function (date, jsEvent, view) {
        console.log(date);
        var mindate = new Date(date._d);
        mindate.setHours(0, 0, 0, 0);
        var maxdate = new Date(mindate);
        maxdate.setDate(maxdate.getDate() + 1);
        var status = '';
        console.log(mindate, maxdate);
        calendarView.getDayEvents(mindate, maxdate, status);
      },
      eventClick: function (calEvent, jsEvent, view) {
        var mindate = new Date(calEvent.start._d);
        mindate.setHours(0, 0, 0, 0);
        var maxdate = new Date(mindate);
        maxdate.setDate(maxdate.getDate() + 1);
        var status = calEvent.status;
        console.log(mindate, maxdate);
        calendarView.getDayEvents(mindate, maxdate, status);
      }
    });
  },
  getDayEvents: function (mindate, maxdate, status) {
    var data = {
      mindate: mindate,
      maxdate: maxdate,
      status: status
    };
    $('#calendar-right-section').html(vmspincentericon);
    if (status && status !== '') {
      APIS.events.getEventsForCalendarByStatus(data, function (err, response) {
        if (!err) {
          console.log(response);
          dust.render('calendar-side-list', response.data, function (err, out) {
            if (err) {
              console.log(err);
            } else {
              $('#calendar-right-section').html(out);
            }
          });
        } else {
          console.log(err);
        }
      });
    } else {
      APIS.events.getEventsForCalendarByDay(data, function (err, response) {
        if (!err) {
          console.log(response);
          dust.render('calendar-side-list', response.data, function (err, out) {
            if (err) {
              console.log(err);
            } else {
              $('#calendar-right-section').html(out);
            }
          });
        } else {
          console.log(err);
        }
      });
    }
  }
};

var dustPager = {
  init: function (params) {
    console.log(params);
    if (params && params.anchor) {
      var params = dustPager.validate(params);
      dust.render('envelop', params, function (err, out) {
        if (err) console.log(err);
        console.log(params);
        $("#" + params.anchor).html(out);
        if (params.more) {
          dust.render('more-options', params, function (err, out) {
            if (err) console.log(err);
            $("#" + params.anchor).find('.panel-ctrls').append(out);
          });
          dust.render('filter-options', params, function (err, out) {
            if (err) console.log(err);
            $("#" + params.anchor).find('.dust-pager-filters').html(out);
          });
        }
      });
      var data = {};
      data.pageNum = params.initPage;
      data.anchor = params.anchor;
      dustPager.initList(data);
    } else {
      console.log('Please enter a anchor point to load!');
    }
  },
  validate: function (params) {
    var params = params;
    var newParam = {};
    newParam.anchor = params.anchor;
    newParam.name = params.name;
    newParam.listTemplate = params.listTemplate;
    newParam.more = params.more;
    if (params.url !== '') {
      newParam.url = params.url;
    } else {
      console.log('Please provide post url for initialization!');
    }
    if (params.initPage) {
      newParam.initPage = parseInt(params.initPage);
    } else {
      newParam.initPage = 1;
    }
    if (params.initSize) {
      newParam.initSize = parseInt(params.initSize);
    }
    if (params.sizes && params.sizes.length > 0) {
      newParam.sizes = [];
      for (var i = 0; i < params.sizes.length; i++) {
        newParam.sizes.push({'value': parseInt(params.sizes[i])});
        if (params.initSize) {
          if (parseInt(params.sizes[i]) === parseInt(params.initSize)) {
            newParam.sizes[i].isSelected = 'selected';
          }
        } else {
          if (i === 0) {
            newParam.sizes[i].isSelected = 'selected';
          }
        }
      }
    }
    return newParam;
  },
  changePage: function (el) {
    var elem = $(el);
    var data = {};
    data.anchor = elem.data('anchor');
    data.pageNum = elem.data('page');
    data.pageSize = $('#widget-' + data.anchor).find('.dust-pager-size').val();
    data.qtext = $('#widget-' + data.anchor).find('.dust-pager-query').val();
    dustPager.loadList(data);
  },
  changePageSize: function (el) {
    var elem = $(el);
    var data = {};
    data.anchor = elem.data('anchor');
    data.pageNum = 1;
    data.pageSize = elem.val();
    data.qtext = $('#widget-' + data.anchor).find('.dust-pager-query').val();
    dustPager.loadList(data);
  },
  initList: function (data) {
    var data = data;
    data.pageSize = $('#widget-' + data.anchor).find('.dust-pager-size').val();
    dustPager.loadList(data);
  },
  getPage: function (page) {
    var newPage = {};
    newPage.pageSize = parseInt(page.pageSize);
    newPage.pageNum = parseInt(page.pageNum);
    newPage.totalCount = parseInt(page.totalCount);
    newPage.start = (newPage.pageNum - 1) * newPage.pageSize + 1;
    if ((newPage.totalCount - (newPage.pageNum - 1) * newPage.pageSize) < newPage.pageSize) {
      newPage.end = newPage.totalCount;
    } else {
      newPage.end = newPage.pageNum * newPage.pageSize;
    }
    newPage.pageList = [];
    newPage.pageCount = Math.ceil(newPage.totalCount / newPage.pageSize);
    if (newPage.pageNum === 1) {
      newPage.firstPage = "disabled";
    } else {
      newPage.firstPage = "";
    }
    if (newPage.pageNum === newPage.pageCount) {
      newPage.lastPage = "disabled";
    } else {
      newPage.lastPage = "";
    }
    if (newPage.pageCount <= 8) {
      for (var i = 1; i <= newPage.pageCount; i++) {
        var num = i;
        var state = "";
        if (i === newPage.pageNum) {
          state = "active";
        }
        newPage.pageList.push({"num": num, "state": state});
      }
    } else {
      if (newPage.pageNum < 7) {
        newPage.pageList.push({"num": 1, "state": ""});
        newPage.pageList.push({"num": "-", "state": "disabled"});
        for (var i = 2; i <= 6; i++) {
          var num = i;
          var state = "";
          if (i === newPage.pageNum) {
            state = "active";
          }
          newPage.pageList.push({"num": num, "state": state});
        }
        newPage.pageList.push({"num": "-", "state": "disabled"});
        newPage.pageList.push({"num": newPage.pageCount, "state": ""});
      } else if ((newPage.pageCount - newPage.pageNum) < 4) {
        newPage.pageList.push({"num": 1, "state": ""});
        newPage.pageList.push({"num": "-", "state": "disabled"});
        for (var i = 0; i < 5; i++) {
          var num = newPage.pageCount - 5 + i;
          var state = "";
          if (num === newPage.pageNum) {
            state = "active";
          }
          newPage.pageList.push({"num": num, "state": state});
        }
        newPage.pageList.push({"num": newPage.pageCount, "state": ""});
      } else {
        newPage.pageList.push({"num": 1, "state": ""});
        newPage.pageList.push({"num": "-", "state": "disabled"});
        for (var i = 0; i < 5; i++) {
          var num = i + newPage.pageNum - 2;
          var state = "";
          if (i === 2) {
            state = "active";
          }
          newPage.pageList.push({"num": num, "state": state});
        }
        newPage.pageList.push({"num": "-", "state": "disabled"});
        newPage.pageList.push({"num": newPage.pageCount, "state": ""});
      }
    }
    return newPage;
  },
  loadList: function (data) {
    var url = $('#widget-' + data.anchor).find('.dust-pager-url').val();
    var listTemplate = $('#widget-' + data.anchor).find('.dust-pager-list-template').val();
    $('#widget-' + data.anchor).find('.dust-pager-list').html('<div class="text-center"><i class="fa fa-spin fa-spinner"></i></div>');
    $.ajax({
      url: url,
      type: "POST",
      data: data,
      headers: null,
      success: function (response) {
        var response = response;
        dust.render(listTemplate, response.data, function (err, out) {
          if (err) {
            console.log(err);
          } else {
            $('#widget-' + data.anchor).find('.dust-pager-list').html(out);
          }
        });
        data.totalCount = response.data.total;
        var page = dustPager.getPage(data);
        page.anchor = data.anchor;
        console.log(page);
        dust.render('footer', page, function (err, out) {
          if (err) {
            console.log(err);
          } else {
            $('#widget-' + data.anchor).find('.dust-pager-footer').html(out);
            $('#widget-' + data.anchor).find('.dust-pager-header').html(out);
          }
        });
      },
      error: function (resp) {
        console.log(resp);
      }
    });
  },
  queryText: function (el) {
    var elem = $(el);
    var data = {};
    data.anchor = elem.data('anchor');
    data.pageNum = 1;
    data.pageSize = $('#widget-' + data.anchor).find('.dust-pager-size').val();
    data.qtext = $('#widget-' + data.anchor).find('.dust-pager-query').val();
    dustPager.loadList(data);
  },
  queryFilters: function (anchor, filters) {
    var data = {};
    data.anchor = anchor;
    data.pageNum = 1;
    data.pageSize = $('#widget-' + data.anchor).find('.dust-pager-size').val();
    data.filters = filters;
    dustPager.loadList(data);
  },
  reset: function (el) {
    var elem = $(el);
    var data = {};
    data.anchor = elem.data('anchor');
    data.pageNum = 1;
    data.pageSize = $('#widget-' + data.anchor).find('.dust-pager-size').val();
    $('#widget-' + data.anchor).find('.dust-pager-query').val('');
    dustPager.loadList(data);
  },
  resetViaAnchor: function (anchor) {
    var data = {};
    data.anchor = anchor;
    data.pageNum = 1;
    data.pageSize = $('#widget-' + data.anchor).find('.dust-pager-size').val();
    $('#widget-' + data.anchor).find('.dust-pager-query').val('');
    dustPager.loadList(data);
  },
  openSidepane: function (anchor) {
    var anchorElem = $('#widget-' + anchor)
    anchorElem.find('.dust-main-pane').removeClass('col-lg-12 col-md-12 col-sm-12 col-xs-12').addClass('col-lg-6 col-md-6 col-sm-6 col-xs-12');
    anchorElem.find('.dust-side-pane').removeClass('hide');
  },
  closeSidepane: function (anchor) {
    var anchorElem = $('#widget-' + anchor);
    anchorElem.find('.dust-main-pane').removeClass('col-lg-6 col-md-6 col-sm-6 col-xs-12').addClass('col-lg-12 col-md-12 col-sm-12 col-xs-12');
    anchorElem.find('.dust-side-pane').addClass('hide');
  },
  reload: function (anchor) {
    var data = {};
    data.anchor = anchor;
    data.pageNum = 1;
    data.pageSize = $('#widget-' + data.anchor).find('.dust-pager-size').val();
    $('#widget-' + data.anchor).find('.dust-pager-query').val('');
    dustPager.loadList(data);
  }
};

var activeEventList = {
  init: function () {
    dustPager.init({
      name: "Enquiry Table",
      url: '/api/v2/events/list',
      initPage: 1,
      initSize: 25,
      sizes: [25, 50, 100, 200],
      anchor: 'mgrEnquiryContainer',
      listTemplate: 'page-list',
      more: true
    });
    $("#eventSearchCity").select2();
    $("#eventPackageType").select2();
    $("#eventVenueType").select2();
    $("#eventOccasion").select2();
    $("#eventStatus").select2();
    $("#eventQuality").select2();

    $('#eventFiltersContainer').on('click', '#eventFiltersSubmit', function () {
      var filters = {};
      filters.cities = $("#eventSearchCity").val();
      filters.venuetypes = $("#eventVenueType").val();
      filters.packagetypes = $("#eventPackageType").val();
      filters.occasions = $("#eventOccasion").val();
      filters.status = $("#eventStatus").val();
      filters.quality = $("#eventQuality").val();
      dustPager.queryFilters("mgrEnquiryContainer", filters);
    });
  },
  editAgent: function (el) {
    var elem = $(el);
    var id = elem.data('pk');
    var dustObj = {
      event: {
        _id: elem.data('pk'),
        agent_id: elem.data('agentid'),
        agent_code: elem.data('code'),
      }
    };
    dust.render('agent-template', dustObj, function (err, out) {
      if (!err) {
        elem.closest('td').html(out);
      }
      console.log(err);
    });
  },
  saveAgent: function (el) {
    var elem = $(el);
    var id = elem.data('id');
    var agent_id = elem.closest('.agent-edit-popover').find('.mark-quality-select').val();
    APIS.events.updateAgent(id, agent_id, null, function (err, response) {
      if (err) {
        console.log(err);
      } else {
        var newEvent = response;
        console.log(response);
        dust.render('row-elem', newEvent, function (err, out) {
          if (err) {
            console.log(err);
          } else {
            $('#activeEventList').find('.elr-' + newEvent._id).html(out);
          }
        });
      }
    });
  },
  editQuality: function (el) {
    var elem = $(el);
    var id = elem.data('pk');
    var dustObj = {
      event: {
        _id: elem.data('pk'),
        quality: elem.data('value')
      }
    };
    dust.render('quality-template', dustObj, function (err, out) {
      if (!err) {
        elem.closest('td').html(out);
      }
      console.log(err);
    });
  },
  saveQuality: function (el) {
    var elem = $(el);
    var id = elem.data('id');
    var vent = {
      quality: elem.closest('.quality-edit-popover').find('.mark-quality-select').val()
    };
    activeEventList.makeChanges(id, vent);
  },
  editMarkImp: function (el) {
    var elem = $(el);
    var id = elem.data('pk');
    var dustObj = {
      event: {
        _id: elem.data('pk'),
        mark_important: elem.data('value')
      }
    };
    dust.render('star-template', dustObj, function (err, out) {
      if (!err) {
        elem.closest('td').html(out);
      }
      console.log(err);
    });
  },
  saveMarkImp: function (el) {
    var elem = $(el);
    var id = elem.data('id');
    var vent = {
      mark_important: elem.closest('.star-edit-popover').find('.mark-important-select').val()
    };
    activeEventList.makeChanges(id, vent);
  },
  editBudget: function (el) {
    var elem = $(el);
    var id = elem.data('pk');
    APIS.events.getEventById(id, function (err, response) {
      if (err) {
        console.log(err);
      } else {
        dust.render('budget-template', response.data, function (err, out) {
          if (!err) {
            elem.closest('td').html(out);
          }
          console.log(err);
        });
      }
    });
  },
  saveBudget: function (el) {
    var elem = $(el);
    var id = elem.data('id');
    var elemContainer = elem.closest('.budget-edit-popover');
    var vent = {
      budget: {
        start: elemContainer.find('.mark-budget-start-select').val(),
        end: elemContainer.find('.mark-budget-end-select').val()
      }
    };
    console.log(id, vent);
    activeEventList.makeChanges(id, vent);
  },
  editGuests: function (el) {
    var elem = $(el);
    var id = elem.data('pk');
    var dustObj = {
      event: {
        _id: elem.data('pk'),
        guests: elem.data('value')
      }
    };
    dust.render('guests-template', dustObj, function (err, out) {
      if (!err) {
        elem.closest('td').html(out);
      }
      console.log(err);
    });
  },
  saveGuests: function (el) {
    var elem = $(el);
    var id = elem.data('id');
    var vent = {
      guests: elem.closest('.guests-edit-popover').find('.mark-guests-select').val()
    };
    activeEventList.makeChanges(id, vent);
  },
  editContactInfo: function (el) {
    var elem = $(el);
    var id = elem.data('pk');
    APIS.events.getEventById(id, function (err, response) {
      if (err) {
        console.log(err);
      } else {
        dust.render('contact-template', response.data, function (err, out) {
          if (!err) {
            elem.closest('td').html(out);
          }
          console.log(err);
        });
      }
    });
  },
  saveContactInfo: function (el) {
    var elem = $(el);
    var id = elem.data('id');
    var vent = {
      contact: {
        name: elem.closest('.contact-edit-popover').find('.mark-contact-name-select').val(),
        email: elem.closest('.contact-edit-popover').find('.mark-contact-email-select').val(),
        phone: elem.closest('.contact-edit-popover').find('.mark-contact-phone-select').val()
      }
    };
    activeEventList.makeChanges(id, vent);
  },
  toggleAllRows: function (el) {
    var elemState = $(el).is(':checked');
    console.log(elemState);
    $('#activeEventList').find('.enquiry-list-checkbox').prop('checked', elemState);
  },
  markImportant: function () {
    var rows = [];
    var items = $('.enquiry-list-checkbox');
    $.each(items, function (i, item) {
      if (item.checked) {
        rows.push(item.value);
      }
    });
    if (rows.length > 0) {
      for (var i = 0; i < rows.length; i++) {
        var event = {};
        event.mark_important = true;
        activeEventList.makeChanges(rows[i], event);
      }
    } else {
      userNotify('Please select items!', 'info');
    }
  },
  unmarkImportant: function () {
    var rows = [];
    var items = $('.enquiry-list-checkbox');
    $.each(items, function (i, item) {
      if (item.checked) {
        rows.push(item.value);
      }
    });
    if (rows.length > 0) {
      for (var i = 0; i < rows.length; i++) {
        var event = {};
        event.mark_important = false;
        activeEventList.makeChanges(rows[i], event);
      }
    } else {
      userNotify('Please select items!', 'info');
    }
  },
  setStatus: function (text) {
    var status = text;
    var rows = [];
    var items = $('.enquiry-list-checkbox');
    $.each(items, function (i, item) {
      if (item.checked) {
        rows.push(item.value);
      }
    });
    if (rows.length > 0) {
      for (var i = 0; i < rows.length; i++) {
        var event = {};
        event.status = status;
        activeEventList.makeChanges(rows[i], event);
      }
    } else {
      userNotify('Please select items!', 'info');
    }
  },
  setQuality: function (text) {
    var quality = text;
    var rows = [];
    var items = $('.enquiry-list-checkbox');
    $.each(items, function (i, item) {
      if (item.checked) {
        rows.push(item.value);
      }
    });
    if (rows.length > 0) {
      for (var i = 0; i < rows.length; i++) {
        var event = {};
        event.quality = quality;
        activeEventList.makeChanges(rows[i], event);
      }
    } else {
      userNotify('Please select items!', 'info');
    }
  },
  makeChanges: function (id, event) {
    APIS.events.updateEvent(id, event, null, function (err, response) {
      if (err) {
        console.log(err);
      } else {
        var newEvent = response;
        console.log(response);
        dust.render('row-elem', newEvent, function (err, out) {
          if (err) {
            console.log(err);
          } else {
            $('#activeEventList').find('.elr-' + newEvent._id).html(out);
          }
        });
      }
    });
  },
  verifyUser: function (el) {
    var elem = $(el);
    var id = elem.data('id');
    APIS.events.verifyUserForEvent(id, function (err, response) {
      if (!err) {
        var newEvent = response.data.event;
        console.log(response);
        dust.render('row-elem', newEvent, function (err, out) {
          if (err) {
            console.log(err);
          } else {
            $('#activeEventList').find('.elr-' + newEvent._id).html(out);
          }
        });
      } else {
        console.log(err);
      }
    });
  }
};

var venueEventList = {
  init: function () {
    var id = $('#mgrEnquiryContainer').data('id');
    if (!_.isEmpty(id)) {
      dustPager.init({
        name: "Enquiry Table",
        url: '/api/v2/venuebundles/venue/' + id + '/list',
        initPage: 1,
        initSize: 25,
        sizes: [25, 50],
        anchor: 'mgrEnquiryContainer',
        listTemplate: 'page-list',
        more: false
      });
    }
  },
  editEvent: function (el) {
    var id = $(el).data('id');
    APIS.venuebundles.getVenuebundleById(id, function (err, response) {
      if (!err) {
        dust.render('edit-venuebundle-form', response.data, function (err, out) {
          if (!err) {
            $('#venuebundleModal').find('.modal-content').html(out);
            $('#venuebundleModal').modal('show');
            $('.vm-datepicker').datepicker({  // Date
              format: "dd-mm-yyyy"
            });
          } else {
            console.log(err);
          }
        });
      } else {
        console.log(err);
        userNotify('Please refresh the browser!', 'danger');
      }
    });
  },
  saveEvent: function () {
    var elemContainer = $('#venuebundleModal');
    var id = elemContainer.find('#mgrEditEventId').val();
    var bundle = {
      name: elemContainer.find('#mgrEditEventName').val(),
      status: elemContainer.find('#mgrEditEventStatus').val(),
      occasion: elemContainer.find('#mgrEditEventOccasion').val(),
      venuetype: elemContainer.find('#mgrEditEventVenuetype').val(),
      packagetype: elemContainer.find('#mgrEditEventPackagetype').val(),
      event_date: elemContainer.find('#mgrEditEventDate').datepicker('getDate'),
      location: elemContainer.find('#mgrEditEventLocation').val(),
      city: elemContainer.find('#mgrEditEventCity').val(),
      budget: {
        start: parseInt(elemContainer.find('#mgrEditEventBudgetMin').val()),
        end: parseInt(elemContainer.find('#mgrEditEventBudgetMax').val())
      },
      guests: parseInt(elemContainer.find('#mgrEditEventGuests').val()),
      verified: elemContainer.find('#mgrEditEventVerified').val(),
      note: elemContainer.find('#mgrEditEventNote').val()
    };
    APIS.venuebundles.updateVenuebundle(id, bundle, function (err, response) {
      if (!err) {
        var venuebundle = response.data.venuebundle;
        console.log(response);
        dust.render('row-elem', venuebundle, function (err, out) {
          if (err) {
            console.log(err);
          } else {
            $('#mgrEnquiryContainer').find('.elr-' + venuebundle._id).html(out);
            $('#venuebundleModal').find('.modal-content').html('');
            $('#venuebundleModal').modal('hide');
          }
        });
      } else {
        console.log(err);
        userNotify('Please refresh the browser!', 'danger');
      }
    });
  },
  editStatus: function (el) {
    var elem = $(el);
    var id = elem.data('pk');
    dust.render('status-template', response.data, function (err, out) {
      if (!err) {
        elem.closest('td').html(out);
      }
      console.log(err);
    });
  },
  saveStatus: function (el) {
    var elem = $(el);
    var id = elem.data('id');
    var elemContainer = elem.closest('.budget-edit-popover');
    var vent = {
      budget: {
        start: elemContainer.find('.mark-budget-start-select').val(),
        end: elemContainer.find('.mark-budget-end-select').val()
      }
    };
    console.log(id, vent);
    activeEventList.makeChanges(id, vent);
  }
};

var standardBundleManager = {
  init: function () {
    dustPager.init({
      name: "List of Collections",
      url: '/api/v2/bundlesets/list',
      initPage: 1,
      initSize: 25,
      sizes: [25, 50, 100, 200],
      anchor: 'mgrBundlesListContainer',
      listTemplate: 'bundleset-list',
      more: true
    });
  },
  openAddBundlePane: function (el) {
    var elem = $(el);
    var anchor = elem.parentsUntil('.dust-pager-top').find('.dust-pager-anchor').val();
    console.log(elem);
    var anchorElem = $('#widget-' + anchor);
    console.log(anchorElem);
    dustPager.openSidepane(anchor);
    anchorElem.find('.dust-pane-body').html(vmspincentericon);
    dust.render('add-bundle-form', {}, function (err, out) {
      if (err) {
        console.log(err);
      } else {
        anchorElem.find('.dust-pane-body').html(out);
        anchorElem.find('.dust-pane-name').text('Add Bundle');
      }
    });
  },
  searchForVenue: function (el) {
    var elem = $(el);
    var qtext = elem.val();
    elem.autocomplete({
      delay: 10,
      minlength: 3,
      source: function (request, response) {
        var suggestURL = "/api/v2/venues/search/" + qtext + "/name";
        $.ajax({
          method: 'GET',
          dataType: 'json',
          url: suggestURL
        })
          .success(function (resp) {
            console.log(resp.data);
            response($.map(resp.data, function (el) {
              return {
                label: el.name,
                name: el.name,
                _id: el._id,
                sub_area: el.sub_area,
                city: el.city,
                vm_id: el.vm_id
              };
            }));
          });
      },
      select: function (event, ui) {
        APIS.bundlesets.getBundleVenueSetById(ui.item._id, function (err, response) {
          if (err) {
            console.log(err);
          } else {
            console.log(response);
            var result = response.data;
            dust.render('add-bundle-venue-item', result, function (err, out) {
              if (err) {
                console.log(err);
              } else {
                elem.closest('.panel-body').find('.venue-list').append(out);
                elem.val('');
              }
            });
          }
        });
      }
    });
  },
  removeVenue: function (el) {
    $(el).closest('.list-group-item').remove();
  },
  addBundleset: function (el) {
    var bundleset = {};
    var elem = $(el).closest('.add-bundleset-panel');
    bundleset.name = elem.find('.add-bundleset-name').val();
    bundleset.reference_number = elem.find('.add-bundleset-ref').val();
    bundleset.description = elem.find('.add-bundleset-desc').val();
    bundleset.venueList = [];
    var venues = elem.find('.add-bundleset-venue');
    $.each(venues, function (i, item) {
      var itemElem = $(item);
      var uid = itemElem.find('.add-bundleset-venueid').val();
      var packs = itemElem.find('.add-bundleset-packitem');
      var packages = [];
      $.each(packs, function (j, packitem) {
        if (packitem.checked) {
          packages.push(packitem.value);
        }
      });
      if (!_.isEmpty(uid)) {
        bundleset.venueList.push({
          uid: uid,
          packages: packages
        });
      }
    });
    console.log(bundleset);
    APIS.bundlesets.addBundleset(bundleset, null, function (err, response) {
      if (!err) {
        var anchor = elem.parentsUntil('.dust-pager-top').find('.dust-pager-anchor').val();
        var anchorElem = $('#widget-' + anchor);
        dustPager.reload(anchor);
        dustPager.closeSidepane(anchor);
        anchorElem.find('.dust-pane-body').html('');
      } else {
        userNotify('Refresh and Try again!', 'danger');
      }
    });
  },
  openEditBundlePane: function (el) {
    var elem = $(el);
    var anchor = elem.parentsUntil('.dust-pager-top').find('.dust-pager-anchor').val();
    var anchorElem = $('#widget-' + anchor);
    var bundleId = elem.data('id');
    var bundleset = {};
    dustPager.openSidepane(anchor);
    anchorElem.find('.dust-pane-body').html(vmspincentericon);
    anchorElem.find('.dust-pane-name').text('Edit Bundle');
    APIS.bundlesets.getBundlesetById(bundleId, null, function (err, response) {
      if (!err) {
        bundleset = response.data.bundleset;
        anchorElem.find('.dust-pane-temp').val(JSON.stringify(bundleset));
        dust.render('edit-bundle-form', bundleset, function (err, out) {
          if (err) {
            console.log(err);
          } else {
            anchorElem.find('.dust-pane-body').html(out);
          }
        });
      }
    });
    var bundleset = JSON.parse(anchorElem.find('.dust-pane-temp').val());
    anchorElem.find('.dust-pane-temp').val('');
    console.log(bundleset);
    var q = async.queue(function (task, callback) {
      var item = task.item;
      APIS.bundlesets.getBundleVenueSetById(item.uid, function (err, response) {
        if (err) {
          console.log(err);
        } else {
          var result = response.data;
          for (var j = 0; j < item.packages.length; j++) {
            for (var k = 0; k < result.packages.length; k++) {
              if (item.packages[j] == result.packages[k]._id) {
                result.packages[k].isSelect = true;
              }
            }
          }
          dust.render('add-bundle-venue-item', result, function (err, out) {
            if (err) {
              console.log(err);
            } else {
              anchorElem.find('.venue-list').append(out);
            }
          });
          callback();
        }
      });
    }, 1);
    q.drain = function () {
      console.log('done');
    };
    q.started = function () {
      console.log('started');
    };
    for (var i = 0; i < bundleset.venueList.length; i++) {
      q.push([{item: bundleset.venueList[i]}], function (err) {
        if (err) console.log(err);
      });
    }
  },
  updateBundleset: function (el) {
    var bundleset = {};
    var elem = $(el).closest('.add-bundleset-panel');
    var id = elem.find('.add-bundleset-id').val();
    bundleset.name = elem.find('.add-bundleset-name').val();
    bundleset.reference_number = elem.find('.add-bundleset-ref').val();
    bundleset.description = elem.find('.add-bundleset-desc').val();
    bundleset.venueList = [];
    var venues = elem.find('.add-bundleset-venue');
    $.each(venues, function (i, item) {
      var itemElem = $(item);
      var uid = itemElem.find('.add-bundleset-venueid').val();
      var packs = itemElem.find('.add-bundleset-packitem');
      var packages = [];
      $.each(packs, function (j, packitem) {
        if (packitem.checked) {
          packages.push(packitem.value);
        }
      });
      if (!_.isEmpty(uid)) {
        bundleset.venueList.push({
          uid: uid,
          packages: packages
        });
      }
    });
    console.log(bundleset);
    APIS.bundlesets.updateBundleset(id, bundleset, function (err, response) {
      if (!err) {
        var anchor = elem.parentsUntil('.dust-pager-top').find('.dust-pager-anchor').val();
        var anchorElem = $('#widget-' + anchor);
        dustPager.reload(anchor);
        dustPager.closeSidepane(anchor);
        anchorElem.find('.dust-pane-body').html('');
      } else {
        userNotify('Refresh and Try again!', 'danger');
      }
    });
  }
};

var userList = {
  init: function () {
    $("#userInput").keyup(function () {
      var useremail = $('#userInput').val();
      console.log(useremail);
      if (useremail.length > 2) {
        $.ajax({
          method: 'GET',
          dataType: 'json',
          url: "/searchbox/userlist/" + useremail
        })
          .success(function (resp) {
            console.log(resp.data);
            dust.render('userlist', resp.data, function (err, out) {
              if (err) {
                console.log(err);
              } else {
                $('#user-results-container').html(out);
              }
            });
          });
      }
    });
  }
};


var updateUser = {
  init: function () {
    var container = $('#userControlsSegment');
    var containerBox = $('#userControlsSegment').find('#UserAccessList');
    container.on('change', '#user-access-level', function () {
      var accessLevel = $(this).val();
      var id = $(this).data('id');
      console.log(id);
      var answer = confirm('Are you sure you want to reject this venue ?');
      if (answer) {
        var user = {};
        user.access_level = accessLevel;
        APIS.users.updateUser(id, user, function (err, response) {
          if (!err) {
            reloadPage();
          } else {
            console.log(err);
            userNotify('Please refresh and retry!', 'danger');
          }
        });
      }
    });

    container.on('click', '.add-access-list', function () {
      var id = $(this).data('id');
      console.log(id);
      APIS.users.addAccessListToUser(id, function (err, resp) {
        if (!err) {
          reloadPage();
        } else {
          console.log(err);
          userNotify('Please refresh and retry!', 'danger');
        }
      });
    });

    if (container.find('#add-user-venue-text')) {
      var searchText = container.find('#add-user-venue-text');
      var cityElem = container.find('#add-user-venue-city');
      searchText.autocomplete({
        delay: 20,
        minlength: 2,
        source: function (request, response) {
          var suggestURL = "/searchbox/%QUERY";
          suggestURL = suggestURL.replace('%QUERY', request.term);
          suggestURL = suggestURL + '?city=' + cityElem.val();
          $.ajax({
            method: 'GET',
            dataType: 'json',
            url: suggestURL
          })
            .success(function (data) {
              response($.map(data.data, function (el) {
                console.log(data.data);
                return {
                  label: el.name + ", " + el.sub_area,
                  value: el.name + ", " + el.sub_area,
                  id: el._id
                };
              }));
            });
        },
        select: function (event, ui) {
          var venueItems = container.find('#VenueResults').find('.venue-item');
          console.log(venueItems);
          var searchResults = [];
          if (venueItems) {
            $.each(venueItems, function (i, item1) {
              var item = $(item1);
              var name = item.find('.venue-item-name').html();
              var id = item.find('.add-to-list').data('id');
              if (name && id) {
                searchResults.push({
                  name: name,
                  id: id
                });
              }
            });
          }
          searchResults.push({
            name: ui.item.value,
            id: ui.item.id
          });
          dust.render('search-result-list', {venues: searchResults}, function (err, out) {
            if (err) {
              console.log(err);
            } else {
              container.find('#VenueResults').html(out);
            }
          });
        }
      });
    }

    var resultsContainer = container.find('#VenueResults');
    resultsContainer.on('click', '.add-to-list', function () {
      var elem = $(this);
      var id = elem.data('id');
      var accessId = container.find('#user-venueaccess-id').val();
      if (accessId && accessId !== '' && id) {
        console.log(id);
        elem.addClass('disabled');
        containerBox.html(vmspincentericon);
        APIS.venueaccesses.addNewEntryToAccess(accessId, {access: id}, function (err, resp) {
          if (!err) {
            updateUser.refreshAccessList(resp.data.venueaccess._id);
          } else {
            userNotify("Failed! Try Again", "danger");
          }
          elem.removeClass('disabled');
        });
      } else {
        userNotify("Please add access", "danger");
      }
    });

    var listContainer = container.find('#UserAccessList');
    listContainer.on('click', '.remove-access', function () {
      var elem = $(this);
      var id = elem.data('id');
      var accessId = container.find('#user-venueaccess-id').val();
      if (accessId && accessId !== '') {
        elem.addClass('disabled');
        containerBox.html(vmspincentericon);
        APIS.venueaccesses.removeEntryFromAccess(accessId, id, function (err, resp) {
          if (!err) {
            updateUser.refreshAccessList(resp.data.venueaccess._id);
          } else {
            userNotify("Failed! Try Again", "danger");
          }
          elem.removeClass('disabled');
        });
      } else {
        userNotify("Please add access", "danger");
      }
    });

  },
  refreshAccessList: function (accessid) {
    var containerBox = $('#userControlsSegment').find('#UserAccessList');
    APIS.venueaccesses.getPopulatedVenueaccessById(accessid, function (err, resp) {
      if (!err) {
        dust.render('access-list', resp.data, function (err, out) {
          if (err) {
            console.log(err);
          } else {
            containerBox.html(out);
          }
        });
      } else {
        reloadPage();
      }
    });

  }
};

var feedbackList = {
  init: function () {
    dustPager.init({
      name: "Feedback Table",
      url: '/api/v2/feedback/list',
      initPage: 1,
      initSize: 25,
      sizes: [25, 50, 100, 200],
      anchor: 'mgrFeedbackContainer',
      listTemplate: 'feedback-list',
      more: false
    });

    var container = $('#mgrFeedbackContainer');
    container.on('click', '.vm-feedback-approve', function () {
      var id = $(this).data('id');
      $(this).append(vmspinicon).addClass('disabled');
      $.ajax({
        url: "/api/v1/feedback/" + id + "/venue-comment/",
        type: "POST",
        success: function (response) {
          userNotify('Approved', 'success');
          var newEvent = response.data.feedback;
          console.log(response);
          dust.render('row-elem', newEvent, function (err, out) {
            if (err) {
              console.log(err);
            } else {
              $('#activeEventList').find('.elr-' + newEvent._id).html(out);
            }
          });
        },
        error: function (resp) {
          console.log(resp);
        }
      });
    });
  },
  editStatus: function (el) {
    var elem = $(el);
    var id = elem.data('pk');
    APIS.events.getEventById(id, function (err, response) {
      if (err) {
        console.log(err);
      } else {
        dust.render('status-template', response.data, function (err, out) {
          if (!err) {
            elem.closest('td').html(out);
          }
          console.log(err);
        });
      }
    });
  },
  saveStatus: function (el) {
    var elem = $(el);
    var id = elem.data('id');
    var elemContainer = elem.closest('.status-edit-popover');
    var vent = {
      status: elemContainer.find('.mark-status-select').val()
    };
    var date = elemContainer.find('.vm-datepicker').val();
    var time = elemContainer.find('.vm-timepicker').val();
    if (time && time !== '') {
      var d = new Date(date + ':' + time);
    } else {
      var d = new Date(date);
    }
    if (vent.status === 'Send Options') {
      if (_.isDate(d)) vent.sop_date = d;
    } else if (vent.status === 'Follow Up') {
      if (_.isDate(d)) vent.follow_date = d;
    } else if (vent.status === 'Call Later') {
      if (_.isDate(d)) vent.call_date = d;
    } else if (vent.status === 'Did Not Pick') {
      if (_.isDate(d)) vent.notpick_date = d;
    } else if (vent.status === 'Schedule Visit') {
      if (_.isDate(d)) vent.visit_date = d;
    }
    console.log(id, vent);
    activeEventList.makeChanges(id, vent);
  },
  changeStatus: function (el) {
    var elem = $(el);
    var id = elem.data('id');
    APIS.events.getEventById(id, function (err, response) {
      if (err) {
        console.log(err);
      } else {
        var dustObj = response.data;
        dustObj.event.status = elem.val();
        dust.render('status-template', dustObj, function (err, out) {
          if (!err) {
            elem.closest('td').html(out);
            $('.vm-datepicker').datetimepicker({  // Date
              format: "yyyy-mm-dd",
              weekStart: 1,
              todayBtn: 1,
              autoclose: 1,
              todayHighlight: 1,
              startView: 2,
              minView: 2,
              forceParse: 0
            });
            $('.vm-timepicker').datetimepicker({ // Time
              format: "hh:ii",
              weekStart: 1,
              todayBtn: 1,
              autoclose: 1,
              todayHighlight: 1,
              startView: 1,
              minView: 0,
              maxView: 1,
              forceParse: 0
            });
          }
          console.log(err);
        });
      }
    });
  },
  editQuality: function (el) {
    var elem = $(el);
    var id = elem.data('pk');
    var dustObj = {
      event: {
        _id: elem.data('pk'),
        quality: elem.data('value')
      }
    };
    dust.render('quality-template', dustObj, function (err, out) {
      if (!err) {
        elem.closest('td').html(out);
      }
      console.log(err);
    });
  },
  saveQuality: function (el) {
    var elem = $(el);
    var id = elem.data('id');
    var vent = {
      quality: elem.closest('.quality-edit-popover').find('.mark-quality-select').val()
    };
    activeEventList.makeChanges(id, vent);
  },
  editMarkImp: function (el) {
    var elem = $(el);
    var id = elem.data('pk');
    var dustObj = {
      event: {
        _id: elem.data('pk'),
        mark_important: elem.data('value')
      }
    };
    dust.render('star-template', dustObj, function (err, out) {
      if (!err) {
        elem.closest('td').html(out);
      }
      console.log(err);
    });
  },
  saveMarkImp: function (el) {
    var elem = $(el);
    var id = elem.data('id');
    var vent = {
      mark_important: elem.closest('.star-edit-popover').find('.mark-important-select').val()
    };
    activeEventList.makeChanges(id, vent);
  },
  editBudget: function (el) {
    var elem = $(el);
    var id = elem.data('pk');
    APIS.events.getEventById(id, function (err, response) {
      if (err) {
        console.log(err);
      } else {
        dust.render('budget-template', response.data, function (err, out) {
          if (!err) {
            elem.closest('td').html(out);
          }
          console.log(err);
        });
      }
    });
  },
  saveBudget: function (el) {
    var elem = $(el);
    var id = elem.data('id');
    var elemContainer = elem.closest('.budget-edit-popover');
    var vent = {
      budget: {
        start: elemContainer.find('.mark-budget-start-select').val(),
        end: elemContainer.find('.mark-budget-end-select').val()
      }
    };
    console.log(id, vent);
    activeEventList.makeChanges(id, vent);
  },
  editGuests: function (el) {
    var elem = $(el);
    var id = elem.data('pk');
    var dustObj = {
      event: {
        _id: elem.data('pk'),
        guests: elem.data('value')
      }
    };
    dust.render('guests-template', dustObj, function (err, out) {
      if (!err) {
        elem.closest('td').html(out);
      }
      console.log(err);
    });
  },
  saveGuests: function (el) {
    var elem = $(el);
    var id = elem.data('id');
    var vent = {
      guests: elem.closest('.guests-edit-popover').find('.mark-guests-select').val()
    };
    activeEventList.makeChanges(id, vent);
  },
  editContactInfo: function (el) {
    var elem = $(el);
    var id = elem.data('pk');
    APIS.events.getEventById(id, function (err, response) {
      if (err) {
        console.log(err);
      } else {
        dust.render('contact-template', response.data, function (err, out) {
          if (!err) {
            elem.closest('td').html(out);
          }
          console.log(err);
        });
      }
    });
  },
  saveContactInfo: function (el) {
    var elem = $(el);
    var id = elem.data('id');
    var vent = {
      contact: {
        name: elem.closest('.contact-edit-popover').find('.mark-contact-name-select').val(),
        email: elem.closest('.contact-edit-popover').find('.mark-contact-email-select').val(),
        phone: elem.closest('.contact-edit-popover').find('.mark-contact-phone-select').val()
      }
    };
    activeEventList.makeChanges(id, vent);
  },
  toggleAllRows: function (el) {
    var elemState = $(el).is(':checked');
    console.log(elemState);
    $('#activeEventList').find('.enquiry-list-checkbox').prop('checked', elemState);
  },
  markImportant: function () {
    var rows = [];
    var items = $('.enquiry-list-checkbox');
    $.each(items, function (i, item) {
      if (item.checked) {
        rows.push(item.value);
      }
    });
    if (rows.length > 0) {
      for (var i = 0; i < rows.length; i++) {
        var event = {};
        event.mark_important = true;
        activeEventList.makeChanges(rows[i], event);
      }
    } else {
      userNotify('Please select items!', 'info');
    }
  },
  unmarkImportant: function () {
    var rows = [];
    var items = $('.enquiry-list-checkbox');
    $.each(items, function (i, item) {
      if (item.checked) {
        rows.push(item.value);
      }
    });
    if (rows.length > 0) {
      for (var i = 0; i < rows.length; i++) {
        var event = {};
        event.mark_important = false;
        activeEventList.makeChanges(rows[i], event);
      }
    } else {
      userNotify('Please select items!', 'info');
    }
  },
  setStatus: function (text) {
    var status = text;
    var rows = [];
    var items = $('.enquiry-list-checkbox');
    $.each(items, function (i, item) {
      if (item.checked) {
        rows.push(item.value);
      }
    });
    if (rows.length > 0) {
      for (var i = 0; i < rows.length; i++) {
        var event = {};
        event.status = status;
        activeEventList.makeChanges(rows[i], event);
      }
    } else {
      userNotify('Please select items!', 'info');
    }
  },
  setQuality: function (text) {
    var quality = text;
    var rows = [];
    var items = $('.enquiry-list-checkbox');
    $.each(items, function (i, item) {
      if (item.checked) {
        rows.push(item.value);
      }
    });
    if (rows.length > 0) {
      for (var i = 0; i < rows.length; i++) {
        var event = {};
        event.quality = quality;
        activeEventList.makeChanges(rows[i], event);
      }
    } else {
      userNotify('Please select items!', 'info');
    }
  },
  makeChanges: function (id, event) {
    APIS.events.updateEvent(id, event, null, function (err, response) {
      if (err) {
        console.log(err);
      } else {
        var newEvent = response;
        console.log(response);
        dust.render('row-elem', newEvent, function (err, out) {
          if (err) {
            console.log(err);
          } else {
            $('#activeEventList').find('.elr-' + newEvent._id).html(out);
          }
        });
      }
    });
  },
  verifyUser: function (el) {
    var elem = $(el);
    var id = elem.data('id');
    APIS.events.verifyUserForEvent(id, function (err, response) {
      if (!err) {
        var newEvent = response.data.event;
        console.log(response);
        dust.render('row-elem', newEvent, function (err, out) {
          if (err) {
            console.log(err);
          } else {
            $('#activeEventList').find('.elr-' + newEvent._id).html(out);
          }
        });
      } else {
        console.log(err);
      }
    });
  }
};

var featuredVenueList = {
  init: function () {
    dustPager.init({
      name: "List of Venues",
      url: '/api/v2/featuredvenues/list',
      initPage: 1,
      initSize: 25,
      sizes: [25, 50, 100, 200],
      anchor: 'mgrVenueListContainer',
      listTemplate: 'featured-list'
    });

    var container = $('#featuredAddVenueContainer');
    if (container.find('#add-user-venue-text')) {
      var searchText = container.find('#add-user-venue-text');
      var cityElem = container.find('#add-user-venue-city');
      searchText.autocomplete({
        delay: 20,
        minlength: 2,
        source: function (request, response) {
          var suggestURL = "/searchbox/%QUERY";
          suggestURL = suggestURL.replace('%QUERY', request.term);
          suggestURL = suggestURL + '?city=' + cityElem.val();
          $.ajax({
            method: 'GET',
            dataType: 'json',
            url: suggestURL
          })
            .success(function (data) {
              response($.map(data.data, function (el) {
                console.log(data.data);
                return {
                  label: el.name + ", " + el.sub_area,
                  value: el.name + ", " + el.sub_area,
                  id: el._id,
                  city: el.city
                };
              }));
            });
        },
        select: function (event, ui) {
          var featuredvenue = {};
          featuredvenue.venue = ui.item.id;
          featuredvenue.price_start = 0;
          featuredvenue.price_end = 0;
          featuredvenue.capacity_start = 0;
          featuredvenue.capacity_end = 0;
          featuredvenue.city = ui.item.city.toLowerCase();
          featuredvenue.isApproved = false;
          APIS.featuredvenues.addFeaturedvenue(featuredvenue, function (err, resp) {
            if (err) {
              console.log(err);
            } else {
              dustPager.resetViaAnchor('mgrVenueListContainer');
            }
          });
        }
      });
    }

    var tableContainer = $("#mgrVenueListContainer");
    tableContainer.on('click', '.featured-edit', function () {
      var elem = $(this);
      var id = elem.data('id');
      console.log(id);
      APIS.featuredvenues.getFeaturedvenueById(id, function (err, resp) {
        if (!err) {
          dust.render('featured-row-edit', resp.data.featuredvenue, function (err, out) {
            if (err) {
              console.log(err);
            } else {
              console.log(out);
              tableContainer.find('#activeVenueList').find('.row-' + resp.data.featuredvenue._id).html(out);
              tableContainer.find('#featured-venuetype').select2();
            }
          });
        }
      });
    });

    tableContainer.on('click', '.featured-save', function () {
      var elem = $(this);
      var id = elem.data('id');
      console.log(id);
      var rowElem = elem.closest('tr');
      var featuredvenue = {};
      featuredvenue.price_start = parseInt(rowElem.find('#featured-price-start').val());
      featuredvenue.price_end = parseInt(rowElem.find('#featured-price-end').val());
      featuredvenue.capacity_start = parseInt(rowElem.find('#featured-capacity-start').val());
      featuredvenue.capacity_end = parseInt(rowElem.find('#featured-capacity-end').val());
      featuredvenue.city = rowElem.find('#featured-city').val().toLowerCase();
      featuredvenue.isApproved = rowElem.find('#featured-approve').val();
      featuredvenue.venuetype = rowElem.find('#featured-venuetype').val();
      console.log(featuredvenue);
      APIS.featuredvenues.updateFeaturedvenue(id, featuredvenue, function (err, resp) {
        if (err) {
          dustPager.resetViaAnchor('mgrVenueListContainer');
        } else {
          dustPager.resetViaAnchor('mgrVenueListContainer');
        }
      });
    });

    tableContainer.on('click', '.featured-remove', function () {
      var elem = $(this);
      var id = elem.data('id');
      console.log(id);
      APIS.featuredvenues.removeFeaturedvenueById(id, function (err, resp) {
        dustPager.resetViaAnchor('mgrVenueListContainer');
      });
    });
  }
};

function toArray(string) {
  if (string == "") {
    return [];
  } else {
    return string.split(', ');
  }
}

function userNotify(msg, type) {
  $.notify({
    title: '',
    message: msg
  }, {
    type: type,
    z_index: 5200,
    animate: {
      enter: 'animated fadeInDown',
      exit: 'animated fadeOutUp'
    },
    placement: {
      from: "top",
      align: "center"
    }
  });
}

function reloadPage() {
  window.location.href = window.location.pathname;
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1);
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return "";
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires + ";path=/";
}

var APIS = {
  users: {
    getEvents: function (userId, callback) {
      $.ajax({
        type: "GET",
        url: "/api/v1/users/" + userId + "/events",
        success: function (response) {
          callback(null, response.data.events);
        },
        error: function () {
          callback('Error');
        }
      });
    },
    updateUser: function (userId, user, callback) {
      $.ajax({
        type: "PUT",
        url: "/api/v1/users/" + userId,
        data: user,
        success: function (response) {
          callback(null, response);
        },
        error: function (err) {
          callback(err);
        }
      });
    },
    addAccessListToUser: function (userId, callback) {
      $.ajax({
        type: "POST",
        url: "/api/v1/users/" + userId + '/add-access',
        data: {},
        success: function (response) {
          callback(null, response);
        },
        error: function (err) {
          callback(err);
        }
      });
    }
  },
  packages: {
    addPackage: function (pkg, headers, callback) {
      $.ajax({
        type: "POST",
        url: "/api/v1/packages/",
        headers: headers,
        data: pkg,
        success: function (response) {
          callback(null, response);
        },
        error: function () {
          callback('Error');
        }
      });
    },
    updatePackage: function (packageId, pkg, callback) {
      $.ajax({
        type: "PUT",
        url: "/api/v1/packages/" + packageId,
        data: pkg,
        success: function (response) {
          callback(null, response);
        },
        error: function () {
          callback('Error');
        }
      });
    },
    removePackage: function (packageId, callback) {
      $.ajax({
        url: "/api/v1/packages/" + packageId,
        type: "DELETE",
        success: function (response) {
          callback(null, response);
        },
        error: function () {
          callback('Error');
        }
      });
    },
    getPackagesByVenueId: function (venueId, callback) {
      $.ajax({
        type: "GET",
        url: "/api/v2/packages/venue/" + venueId + '/list',
        success: function (response) {
          callback(null, response);
        },
        error: function (resp) {
          callback(resp);
        }
      });
    }
  },
  menus: {
    addMenu: function (menu, headers, callback) {
      $.ajax({
        type: "POST",
        url: "/api/v1/menus/",
        headers: headers,
        data: menu,
        success: function (response) {
          callback(null, response);
        },
        error: function () {
          callback('Error');
        }
      });
    },
    updateMenu: function (menuId, menu, callback) {
      $.ajax({
        type: "PUT",
        url: "/api/v1/menus/" + menuId,
        data: menu,
        success: function (response) {
          callback(null, response);
        },
        error: function () {
          callback('Error');
        }
      });
    },
    getMenuById: function (menuId, callback) {
      $.ajax({
        type: "GET",
        url: "/api/v1/menus/" + menuId,
        success: function (response) {
          callback(null, response);
        },
        error: function (resp) {
          callback(resp);
        }
      });
    },
    getMenusByVenueId: function (venueId, callback) {
      $.ajax({
        type: "GET",
        url: "/api/v1/menus/venue/" + venueId + '/list',
        success: function (response) {
          callback(null, response);
        },
        error: function (resp) {
          callback(resp);
        }
      });
    },
    removeMenu: function (menuId, callback) {
      $.ajax({
        url: "/api/v1/menus/" + menuId,
        type: "DELETE",
        success: function (response) {
          callback(null, response);
        },
        error: function () {
          callback('Error');
        }
      });
    }
  },
  venues: {
    addVenueToEvents: function (venueId, events, callback) {
      $.ajax({
        type: "POST",
        url: "/api/v1/venues/" + venueId + "/events",
        data: events,
        success: function (response) {
          callback(null, response);
        },
        error: function () {
          callback('Error');
        }
      });
    },
    createVenue: function (venue, headers, callback) {
      $.ajax({
        type: "POST",
        url: "/api/v1/venues/new",
        headers: headers,
        data: venue,
        success: function (response) {
          callback(null, response);
        },
        error: function () {
          callback('Error');
        }
      });
    },
    updateVenue: function (venueId, venue, headers, callback) {
      $.ajax({
        type: "PUT",
        url: "/api/v1/venues/" + venueId,
        headers: headers,
        data: venue,
        success: function (response) {
          callback(null, response.data.venue);
        },
        error: function () {
          callback('Error');
        }
      });
    },
    checkVenuesForSimilarVmId: function (city, vmId, headers, callback) {
      $.ajax({
        type: "GET",
        url: "/api/v1/venues/" + city + "/" + vmId + "/check/",
        headers: headers,
        success: function (response) {
          callback(null, response);
        },
        error: function (resp) {
          callback(resp);
        }
      });
    },
    getVenueByVmId: function (city, vmId, headers, callback) {
      $.ajax({
        type: "GET",
        url: "/api/v1/venues/" + city + "/" + vmId + "/venue/",
        headers: headers,
        data: null,
        success: function (response) {
          callback(null, response.data);
        },
        error: function () {
          callback('Error');
        }
      });
    },
    getByVenueId: function (venueId, headers, callback) {
      $.ajax({
        type: "GET",
        url: "/api/v1/venues/" + venueId,
        headers: headers,
        data: null,
        success: function (response) {
          callback(null, response.data);
        },
        error: function () {
          callback('Error');
        }
      });
    },
    deleteVenue: function (venueId, callback) {
      $.ajax({
        type: "DELETE",
        url: "/api/v1/venues/" + venueId,
        success: function (response) {
          callback(null, response);
        },
        error: function () {
          callback('Error');
        }
      });
    },
    onboardVenue: function (data, callback) {
      $.ajax({
        type: "POST",
        url: "/api/v3/onboarding/onboard-venue",
        data: data,
        success: function (response) {
          callback(null, response);
        },
        error: function () {
          callback('Error');
        }
      });
    }
  },
  events: {
    createEvent: function (event, headers, callback) {
      $.ajax({
        url: "/api/v1/events/",
        type: "POST",
        headers: headers,
        data: event,
        success: function (response) {
          callback(null, response.data.event);
        },
        error: function () {
          callback('Error');
        }
      });
    },
    getEventById: function (eventId, callback) {
      $.ajax({
        url: "/api/v1/events/" + eventId,
        type: "GET",
        success: function (response) {
          callback(null, response);
        },
        error: function () {
          callback('Error');
        }
      });
    },
    getEventsByDate: function (date, callback) {
      $.ajax({
        url: "/api/v2/events/date",
        type: "POST",
        data: date,
        headers: null,
        success: function (response) {
          callback(null, response.data);
        },
        error: function () {
          callback('Error');
        }
      });
    },
    getEventsByDateRange: function (data, callback) {
      $.ajax({
        url: "/api/v2/events/date-range",
        type: "POST",
        data: data,
        headers: null,
        success: function (response) {
          callback(null, response.data);
        },
        error: function () {
          callback('Error');
        }
      });
    },
    getEventsByMinMaxDate: function (data, callback) {
      $.ajax({
        url: "/api/v2/events/kanban",
        type: "POST",
        data: data,
        headers: null,
        success: function (response) {
          callback(null, response.data);
        },
        error: function () {
          callback('Error');
        }
      });
    },
    getEventsForCalendarByDay: function (data, callback) {
      $.ajax({
        url: "/api/v2/events/calendar/day",
        type: "POST",
        data: data,
        headers: null,
        success: function (response) {
          callback(null, response);
        },
        error: function (resp) {
          callback(resp);
        }
      });
    },
    getEventsForCalendarByStatus: function (data, callback) {
      $.ajax({
        url: "/api/v2/events/calendar/segment",
        type: "POST",
        data: data,
        headers: null,
        success: function (response) {
          callback(null, response);
        },
        error: function (resp) {
          callback(resp);
        }
      });
    },
    getAllEventsByStatus: function (status, callback) {
      $.ajax({
        url: "/api/v1/events/" + status + '/status',
        type: "GET",
        success: function (response) {
          callback(null, response);
        },
        error: function () {
          callback('Error');
        }
      });
    },
    deleteVenue: function (eventId, venueId, callback) {
      $.ajax({
        url: "/api/v1/events/" + eventId + "/venues/" + venueId,
        type: "DELETE",
        success: function (response) {
          callback(null, response);
        },
        error: function () {
          callback('Error');
        }
      });
    },
    updateEvent: function (eventId, event, headers, callback) {
      $.ajax({
        type: "PUT",
        url: "/api/v1/events/" + eventId,
        headers: headers,
        data: event,
        success: function (response) {
          callback(null, response.data.event);
        },
        error: function () {
          callback('Error');
        }
      });
    },
    updateAgent: function (eventId, agentId, headers, callback) {
      $.ajax({
        type: "POST",
        url: "/api/v2/events/" + eventId + "/agent/" + agentId + "/change",
        headers: headers,
        data: {},
        success: function (response) {
          callback(null, response.data.event);
        },
        error: function () {
          callback('Error');
        }
      });
    },
    deleteEvent: function (eventId, callback) {
      $.ajax({
        type: "DELETE",
        url: "/api/v1/events/" + eventId,
        success: function (response) {
          callback(null, response);
        },
        error: function () {
          callback('Error');
        }
      });
    },
    getAllEventsList: function (filters, callback) {
      $.ajax({
        type: "POST",
        url: "/api/v2/events/list",
        success: function (response) {
          callback(null, response);
        },
        error: function () {
          callback('Error');
        }
      });
    },
    verifyUserForEvent: function (eventid, callback) {
      $.ajax({
        type: "POST",
        url: "/api/v3/events/" + eventid + '/verify',
        success: function (response) {
          callback(null, response);
        },
        error: function (resp) {
          callback(resp);
        }
      });
    }
  },
  comments: {
    post: function (comment, callback) {
      $.ajax({
        type: "POST",
        url: "/api/v1/comments",
        data: comment,
        success: function (response) {
          callback(null, response);
        },
        error: function () {
          callback('Error');
        }
      });
    }
  },
  cuisines: {
    getAll: function (callback) {
      $.ajax({
        type: "GET",
        url: "/api/v1/cuisines",
        success: function (response) {
          callback(null, response.data);
        },
        error: function () {
          callback('Error');
        }
      });
    }
  },
  facilities: {
    getAll: function (callback) {
      $.ajax({
        type: "GET",
        url: "/api/v1/facilities",
        success: function (response) {
          callback(null, response.data);
        },
        error: function () {
          callback('Error');
        }
      });
    }
  },
  occasions: {
    getAll: function (callback) {
      $.ajax({
        type: "GET",
        url: "/api/v1/occasions",
        success: function (response) {
          callback(null, response.data);
        },
        error: function () {
          callback('Error');
        }
      });
    }
  },
  venuetypes: {
    getAll: function (callback) {
      $.ajax({
        type: "GET",
        url: "/api/v1/venuetypes",
        success: function (response) {
          callback(null, response.data);
        },
        error: function () {
          callback('Error');
        }
      });
    }
  },
  tickets: {
    addTicket: function (tkt, headers, callback) {
      $.ajax({
        type: "POST",
        url: "/api/v1/tickets/",
        headers: headers,
        data: tkt,
        success: function (response) {
          callback(null, response);
        },
        error: function () {
          callback('Error');
        }
      });
    },
    updateTicket: function (ticketId, tkt, callback) {
      $.ajax({
        type: "PUT",
        url: "/api/v1/tickets/" + ticketId,
        data: tkt,
        success: function (response) {
          callback(null, response);
        },
        error: function () {
          callback('Error');
        }
      });
    },
    removeTicket: function (ticketId, callback) {
      $.ajax({
        url: "/api/v1/tickets/" + ticketId,
        type: "DELETE",
        success: function (response) {
          callback(null, response);
        },
        error: function () {
          callback('Error');
        }
      });
    },
    getTicketBytktId: function (city, tktId, headers, callback) {
      $.ajax({
        type: "GET",
        url: "/api/v1/tickets/" + city + "/tktId/" + tktId,
        headers: headers,
        data: null,
        success: function (response) {
          callback(null, response.data);
        },
        error: function () {
          callback('Error');
        }
      });
    },
    getByTicketId: function (ticketId, headers, callback) {
      $.ajax({
        type: "GET",
        url: "/api/v1/tickets/" + ticketId,
        headers: headers,
        data: null,
        success: function (response) {
          callback(null, response.data);
        },
        error: function () {
          callback('Error');
        }
      });
    }
  },
  expressbooks: {
    addExpressbook: function (expbook, headers, callback) {
      $.ajax({
        type: "POST",
        url: "/api/v1/expressbooks/",
        headers: headers,
        data: expbook,
        success: function (response) {
          callback(null, response);
        },
        error: function () {
          callback('Error');
        }
      });
    },
    updateExpressbook: function (expbookId, expbook, callback) {
      $.ajax({
        type: "PUT",
        url: "/api/v1/expressbooks/" + expbookId,
        data: expbook,
        success: function (response) {
          callback(null, response);
        },
        error: function () {
          callback('Error');
        }
      });
    },
    removeExpressbook: function (expbookId, callback) {
      $.ajax({
        url: "/api/v1/expressbooks/" + expbookId,
        type: "DELETE",
        success: function (response) {
          callback(null, response);
        },
        error: function () {
          callback('Error');
        }
      });
    }
  },
  bdaypacks: {
    addBdaypack: function (pack, headers, callback) {
      $.ajax({
        type: "POST",
        url: "/api/v1/bdaypacks/",
        headers: headers,
        data: pack,
        success: function (response) {
          callback(null, response);
        },
        error: function (err) {
          callback(err);
        }
      });
    },
    updateBdaypack: function (packId, pack, callback) {
      $.ajax({
        type: "PUT",
        url: "/api/v1/bdaypacks/" + packId,
        data: pack,
        success: function (response) {
          callback(null, response);
        },
        error: function () {
          callback('Error');
        }
      });
    },
    removeBdaypack: function (packId, callback) {
      $.ajax({
        url: "/api/v1/bdaypacks/" + packId,
        type: "DELETE",
        success: function (response) {
          callback(null, response);
        },
        error: function () {
          callback('Error');
        }
      });
    }
  },
  partypacks: {
    addPartypack: function (pack, headers, callback) {
      $.ajax({
        type: "POST",
        url: "/api/v1/partypacks/",
        headers: headers,
        data: pack,
        success: function (response) {
          callback(null, response);
        },
        error: function () {
          callback('Error');
        }
      });
    },
    updatePartypack: function (packId, pack, callback) {
      $.ajax({
        type: "PUT",
        url: "/api/v1/partypacks/" + packId,
        data: pack,
        success: function (response) {
          callback(null, response);
        },
        error: function () {
          callback('Error');
        }
      });
    },
    removePartypack: function (packId, callback) {
      $.ajax({
        url: "/api/v1/partypacks/" + packId,
        type: "DELETE",
        success: function (response) {
          callback(null, response);
        },
        error: function () {
          callback('Error');
        }
      });
    }
  },
  collections: {
    addCollection: function (collection, headers, callback) {
      $.ajax({
        type: "POST",
        url: "/api/v1/collections/",
        headers: headers,
        data: collection,
        success: function (response) {
          callback(null, response);
        },
        error: function () {
          callback('Error');
        }
      });
    },
    updateCollection: function (collectionId, collection, callback) {
      $.ajax({
        type: "PUT",
        url: "/api/v1/collections/" + collectionId,
        data: collection,
        success: function (response) {
          callback(null, response);
        },
        error: function () {
          callback('Error');
        }
      });
    },
    removeCollection: function (collectionId, callback) {
      $.ajax({
        url: "/api/v1/collections/" + collectionId,
        type: "DELETE",
        success: function (response) {
          callback(null, response);
        },
        error: function () {
          callback('Error');
        }
      });
    }
  },
  caterers: {
    addCaterer: function (caterer, headers, callback) {
      $.ajax({
        type: "POST",
        url: "/api/v1/vendors/caterers/",
        headers: headers,
        data: caterer,
        success: function (response) {
          callback(null, response);
        },
        error: function () {
          callback('Error');
        }
      });
    },
    updateCaterer: function (catererId, caterer, headers, callback) {
      $.ajax({
        type: "PUT",
        url: "/api/v1/vendors/caterers/" + catererId,
        headers: headers,
        data: caterer,
        success: function (response) {
          callback(null, response);
        },
        error: function () {
          callback('Error');
        }
      });
    },
    removeCaterer: function (catererId, callback) {
      $.ajax({
        url: "/api/v1/vendors/caterers/" + catererId,
        type: "DELETE",
        success: function (response) {
          callback(null, response);
        },
        error: function () {
          callback('Error');
        }
      });
    },
    getCatererById: function (catererId, headers, callback) {
      $.ajax({
        type: "GET",
        url: "/api/v1/vendors/caterers/" + catererId,
        headers: headers,
        data: null,
        success: function (response) {
          callback(null, response.data);
        },
        error: function () {
          callback('Error');
        }
      });
    }

  },
  decorators: {
    addDecorator: function (decorator, headers, callback) {
      $.ajax({
        type: "POST",
        url: "/api/v1/vendors/decorators/",
        headers: headers,
        data: decorator,
        success: function (response) {
          callback(null, response);
        },
        error: function () {
          callback('Error');
        }
      });
    },
    updateDecorator: function (decoratorId, decorator, headers, callback) {
      $.ajax({
        type: "PUT",
        url: "/api/v1/vendors/decorators/" + decoratorId,
        headers: headers,
        data: decorator,
        success: function (response) {
          callback(null, response);
        },
        error: function () {
          callback('Error');
        }
      });
    },
    removeDecorator: function (decoratorId, callback) {
      $.ajax({
        url: "/api/v1/vendors/decorators/" + decoratorId,
        type: "DELETE",
        success: function (response) {
          callback(null, response);
        },
        error: function () {
          callback('Error');
        }
      });
    },
    getDecoratorById: function (decoratorId, headers, callback) {
      $.ajax({
        type: "GET",
        url: "/api/v1/vendors/decorators/" + decoratorId,
        headers: headers,
        data: null,
        success: function (response) {
          callback(null, response.data);
        },
        error: function () {
          callback('Error');
        }
      });
    }
  },
  eplanners: {
    addEplanner: function (eplanner, headers, callback) {
      $.ajax({
        type: "POST",
        url: "/api/v1/vendors/eplanners/",
        headers: headers,
        data: eplanner,
        success: function (response) {
          callback(null, response);
        },
        error: function () {
          callback('Error');
        }
      });
    },
    updateEplanner: function (eplannerId, eplanner, headers, callback) {
      $.ajax({
        type: "PUT",
        url: "/api/v1/vendors/eplanners/" + eplannerId,
        headers: headers,
        data: eplanner,
        success: function (response) {
          callback(null, response);
        },
        error: function () {
          callback('Error');
        }
      });
    },
    removeEplanner: function (eplannerId, callback) {
      $.ajax({
        url: "/api/v1/vendors/eplanners/" + eplannerId,
        type: "DELETE",
        success: function (response) {
          callback(null, response);
        },
        error: function () {
          callback('Error');
        }
      });
    },
    getEplannerById: function (eplannerId, headers, callback) {
      $.ajax({
        type: "GET",
        url: "/api/v1/vendors/eplanners/" + eplannerId,
        headers: headers,
        data: null,
        success: function (response) {
          callback(null, response.data);
        },
        error: function () {
          callback('Error');
        }
      });
    }
  },
  makeupartists: {
    addMakeupartist: function (makeupartist, headers, callback) {
      $.ajax({
        type: "POST",
        url: "/api/v1/vendors/makeupartists/",
        headers: headers,
        data: makeupartist,
        success: function (response) {
          callback(null, response);
        },
        error: function () {
          callback('Error');
        }
      });
    },
    updateMakeupartist: function (makeupartistId, makeupartist, headers, callback) {
      $.ajax({
        type: "PUT",
        url: "/api/v1/vendors/makeupartists/" + makeupartistId,
        headers: headers,
        data: makeupartist,
        success: function (response) {
          callback(null, response);
        },
        error: function () {
          callback('Error');
        }
      });
    },
    removeMakeupartist: function (makeupartistId, callback) {
      $.ajax({
        url: "/api/v1/vendors/makeupartists/" + makeupartistId,
        type: "DELETE",
        success: function (response) {
          callback(null, response);
        },
        error: function () {
          callback('Error');
        }
      });
    },
    getMakeupartistById: function (makeupartistId, headers, callback) {
      $.ajax({
        type: "GET",
        url: "/api/v1/vendors/makeupartists/" + makeupartistId,
        headers: headers,
        data: null,
        success: function (response) {
          callback(null, response.data);
        },
        error: function () {
          callback('Error');
        }
      });
    }
  },
  photographers: {
    addPhotographer: function (photographer, headers, callback) {
      $.ajax({
        type: "POST",
        url: "/api/v1/vendors/photographers/",
        headers: headers,
        data: photographer,
        success: function (response) {
          callback(null, response);
        },
        error: function () {
          callback('Error');
        }
      });
    },
    updatePhotographer: function (photographerId, photographer, headers, callback) {
      $.ajax({
        type: "PUT",
        url: "/api/v1/vendors/photographers/" + photographerId,
        headers: headers,
        data: photographer,
        success: function (response) {
          callback(null, response);
        },
        error: function () {
          callback('Error');
        }
      });
    },
    removePhotographer: function (photographerId, callback) {
      $.ajax({
        url: "/api/v1/vendors/photographers/" + photographerId,
        type: "DELETE",
        success: function (response) {
          callback(null, response);
        },
        error: function () {
          callback('Error');
        }
      });
    },
    getPhotographerById: function (photographerId, headers, callback) {
      $.ajax({
        type: "GET",
        url: "/api/v1/vendors/photographers/" + photographerId,
        headers: headers,
        data: null,
        success: function (response) {
          callback(null, response.data);
        },
        error: function () {
          callback('Error');
        }
      });
    }
  },
  subareas: {
    addSubarea: function (subarea, headers, callback) {
      $.ajax({
        type: "POST",
        url: "/api/v1/subareas/",
        headers: headers,
        data: subarea,
        success: function (response) {
          callback(null, response);
        },
        error: function () {
          callback('Error');
        }
      });
    }
  },
  bundlesets: {
    addBundleset: function (bundleset, headers, callback) {
      $.ajax({
        type: "POST",
        url: "/api/v1/bundlesets/",
        headers: headers,
        data: bundleset,
        success: function (response) {
          callback(null, response);
        },
        error: function (resp) {
          callback(resp);
        }
      });
    },
    getBundlesetById: function (bundlesetId, headers, callback) {
      $.ajax({
        type: "GET",
        url: "/api/v1/bundlesets/" + bundlesetId,
        headers: headers,
        success: function (response) {
          callback(null, response);
        },
        error: function (resp) {
          callback(resp);
        }
      });
    },
    getBundleVenueSetById: function (venueid, callback) {
      $.ajax({
        type: "GET",
        url: "/api/v2/bundlesets/venue/" + venueid + '/packagelist',
        success: function (response) {
          callback(null, response);
        },
        error: function (resp) {
          callback(resp);
        }
      });
    },
    updateBundleset: function (bundlesetId, bundleset, callback) {
      $.ajax({
        type: "PUT",
        url: "/api/v1/bundlesets/" + bundlesetId,
        data: bundleset,
        success: function (response) {
          callback(null, response);
        },
        error: function (resp) {
          callback(resp);
        }
      });
    },
    removeCollection: function (bundlesetId, callback) {
      $.ajax({
        url: "/api/v1/bundlesets/" + bundlesetId,
        type: "DELETE",
        success: function (response) {
          callback(null, response);
        },
        error: function (resp) {
          callback(resp);
        }
      });
    }
  },
  venuebundles: {
    getVenuebundleById: function (bundlesetId, callback) {
      $.ajax({
        type: "GET",
        url: "/api/v1/venuebundles/" + bundlesetId,
        headers: null,
        success: function (response) {
          callback(null, response);
        },
        error: function (resp) {
          callback(resp);
        }
      });
    },
    updateVenuebundle: function (bundlesetId, bundleset, callback) {
      $.ajax({
        type: "PUT",
        url: "/api/v1/venuebundles/" + bundlesetId,
        data: bundleset,
        success: function (response) {
          callback(null, response);
        },
        error: function (resp) {
          callback(resp);
        }
      });
    }
  },
  venueaccesses: {
    addVenueaccess: function (access, callback) {
      $.ajax({
        type: "POST",
        url: "/api/v1/venueaccesses/",
        data: access,
        success: function (response) {
          callback(null, response);
        },
        error: function (resp) {
          callback(resp);
        }
      });
    },
    getVenueaccessById: function (accessId, callback) {
      $.ajax({
        type: "GET",
        url: "/api/v1/venueaccesses/" + accessId,
        headers: null,
        success: function (response) {
          callback(null, response);
        },
        error: function (resp) {
          callback(resp);
        }
      });
    },
    getPopulatedVenueaccessById: function (accessId, callback) {
      $.ajax({
        type: "POST",
        url: "/api/v1/venueaccesses/" + accessId + "/populated",
        headers: null,
        success: function (response) {
          callback(null, response);
        },
        error: function (resp) {
          callback(resp);
        }
      });
    },
    updateVenueaccess: function (accessId, access, callback) {
      $.ajax({
        type: "PUT",
        url: "/api/v1/venueaccesses/" + accessId,
        data: access,
        success: function (response) {
          callback(null, response);
        },
        error: function (resp) {
          callback(resp);
        }
      });
    },
    addNewEntryToAccess: function (accessid, access, callback) {
      $.ajax({
        type: "POST",
        url: "/api/v1/venueaccesses/" + accessid + "/entry",
        data: access,
        success: function (response) {
          callback(null, response);
        },
        error: function (resp) {
          callback(resp);
        }
      });
    },
    removeEntryFromAccess: function (accessid, subid, callback) {
      $.ajax({
        type: "DELETE",
        url: "/api/v1/venueaccesses/" + accessid + "/list/" + subid,
        success: function (response) {
          callback(null, response);
        },
        error: function (resp) {
          callback(resp);
        }
      });
    }
  },
  featuredvenues: {
    addFeaturedvenue: function (data, callback) {
      $.ajax({
        type: "POST",
        url: "/api/v1/featuredvenues/",
        data: data,
        success: function (response) {
          callback(null, response);
        },
        error: function (resp) {
          callback(resp);
        }
      });
    },
    getFeaturedvenueById: function (objectId, callback) {
      $.ajax({
        type: "GET",
        url: "/api/v1/featuredvenues/" + objectId,
        headers: null,
        success: function (response) {
          callback(null, response);
        },
        error: function (resp) {
          callback(resp);
        }
      });
    },
    updateFeaturedvenue: function (objectId, data, callback) {
      $.ajax({
        type: "PUT",
        url: "/api/v1/featuredvenues/" + objectId,
        data: data,
        success: function (response) {
          callback(null, response);
        },
        error: function (resp) {
          callback(resp);
        }
      });
    },
    removeFeaturedvenueById: function (objectId, callback) {
      $.ajax({
        type: "DELETE",
        url: "/api/v1/featuredvenues/" + objectId,
        headers: null,
        success: function (response) {
          callback(null, response);
        },
        error: function (resp) {
          callback(resp);
        }
      });
    }
  },
  analytics: {
    getEventsByDateRange: function (data, callback) {

    }
  }
};

angular.module('templates-app', ['configuration/configuration.tpl.html', 'generator/generator.tpl.html']);

angular.module("configuration/configuration.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("configuration/configuration.tpl.html",
    "<form name=\"configuration\" class=\"form-horizontal\" role=\"form\" novalidate>\n" +
    "  <div class=\"panel panel-default\">\n" +
    "    <div class=\"panel-heading\">Defaults</div>\n" +
    "    <div class=\"panel-body\">\n" +
    "      <div class=\"form-group\" ng-class=\"{'has-error': configuration.hashAlgorithm.$invalid}\">\n" +
    "        <label for=\"hashAlgorithm\" class=\"col-sm-3 control-label\">Hash algorithm</label>\n" +
    "        <div class=\"col-sm-9\">\n" +
    "          <select name=\"hashAlgorithm\" class=\"form-control\" ng-model=\"profile.hashAlgorithm\" ng-options=\"algorithm for algorithm in hashAlgorithms\"\n" +
    "              required>\n" +
    "          </select>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\" ng-class=\"{'has-error': configuration.passwordLength.$invalid}\">\n" +
    "        <label for=\"passwordLength\" class=\"col-sm-3 control-label\">Password length</label>\n" +
    "        <div class=\"col-sm-9\">\n" +
    "          <input name=\"passwordLength\" type=\"number\" class=\"form-control\" ng-model=\"profile.passwordLength\"\n" +
    "              required integer min=\"1\" ng-minlength=\"1\" ng-pattern=\"/^[0-9]+$/\" />\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\" ng-class=\"{'has-error': configuration.characters.$invalid}\">\n" +
    "        <label for=\"characters\" class=\"col-sm-3 control-label\">Characters</label>\n" +
    "        <div class=\"col-sm-9\">\n" +
    "          <input name=\"characters\" type=\"text\" class=\"form-control\" ng-model=\"profile.characters\"\n" +
    "              required ng-minlength=\"2\" />\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"panel panel-default\">\n" +
    "    <div class=\"panel-heading\">Exceptions</div>\n" +
    "    <div class=\"panel-body\">\n" +
    "      <div class=\"bs-callout bs-callout-info\" id=\"callout-helper-bg-specificity\">\n" +
    "        <h4>\n" +
    "          <i class=\"fa fa-info pull-left\"></i>\n" +
    "          Dealing with specificity\n" +
    "        </h4>\n" +
    "        <p>\n" +
    "          Sometimes, in the best case, web sites password policy are more strict than your default configuration, or in the worst case the password generated isn't accepted by the service provider security policy. For these cases, you wan override the main configuration:\n" +
    "          <ul>\n" +
    "            <li>password length</li>\n" +
    "            <li>add a <em>modifier</em> to alter the generated password</li>\n" +
    "            <li>change the caracter set used to generate the password</li>\n" +
    "          </ul>\n" +
    "        </p>\n" +
    "      </div>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "    <ul class=\"list-group\">\n" +
    "      <li class=\"list-group-item\" ng-repeat=\"exception in profile.exceptions\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label for=\"exception-{{ $index }}\" class=\"col-sm-3 control-label\">Service</label>\n" +
    "          <div class=\"col-sm-9\">\n" +
    "            <div class=\"input-group\">\n" +
    "              <input id=\"exception-{{ $index }}\" type=\"text\" class=\"form-control\" ng-model=\"exception.service\" />\n" +
    "              <span class=\"input-group-btn\">\n" +
    "                <button class=\"btn btn-danger\" type=\"button\" ng-click=\"removeException($index)\">Remove</button>\n" +
    "              </span>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "          <label for=\"passwordLength-{{ $index }}\" class=\"col-sm-3 control-label\">Password length</label>\n" +
    "          <div class=\"col-sm-9\">\n" +
    "            <div class=\"input-group\">\n" +
    "              <span class=\"input-group-addon\">\n" +
    "                <input type=\"checkbox\" ng-model=\"exception.passwordLength.override\">\n" +
    "              </span>\n" +
    "              <input id=\"passwordLength-{{ $index }}\" type=\"number\" class=\"form-control\" ng-model=\"exception.passwordLength.value\" ng-disabled=\"!exception.passwordLength.override\" ng-pattern=\"/\\d+/\" />\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "          <label for=\"modifier-{{ $index }}\" class=\"col-sm-3 control-label\">Modifier</label>\n" +
    "          <div class=\"col-sm-9\">\n" +
    "            <div class=\"input-group\">\n" +
    "              <span class=\"input-group-addon\">\n" +
    "                <input type=\"checkbox\" ng-model=\"exception.modifier.override\">\n" +
    "              </span>\n" +
    "              <input id=\"modifier-{{ $index }}\" type=\"text\" class=\"form-control\" ng-model=\"exception.modifier.value\" ng-disabled=\"!exception.modifier.override\" />\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "          <label for=\"characters-{{ $index }}\" class=\"col-sm-3 control-label\">Characters</label>\n" +
    "          <div class=\"col-sm-9\">\n" +
    "            <div class=\"input-group\">\n" +
    "              <span class=\"input-group-addon\">\n" +
    "                <input type=\"checkbox\" ng-model=\"exception.characters.override\">\n" +
    "              </span>\n" +
    "              <input id=\"characters-{{ $index }}\" type=\"text\" class=\"form-control\" ng-model=\"exception.characters.value\" ng-disabled=\"!exception.characters.override\" />\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </li>\n" +
    "      <li class=\"list-group-item\">\n" +
    "        <div class=\"pull-right\">\n" +
    "          <button class=\"btn btn-success\" ng-click=\"addException()\"><i class=\"fa fa-plus-circle\"></i> Add exception</button>\n" +
    "        </div>\n" +
    "        <span class=\"clearfix\"></span>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "  </div>\n" +
    "  <div class=\"pull-right\">\n" +
    "    <button class=\"btn btn-default\" ng-click=\"restoreConfiguration()\">Restore</button>\n" +
    "    <button class=\"btn btn-default\" ng-click=\"showConfiguration()\">Show</button>\n" +
    "    <button class=\"btn btn-primary\" ng-click=\"saveConfiguration()\" ng-disabled=\"configuration.$invalid\"><i class=\"fa fa-floppy-o\"></i> Save</button>\n" +
    "  </div>\n" +
    "</form>\n" +
    "");
}]);

angular.module("generator/generator.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("generator/generator.tpl.html",
    "<div ng-if=\"error\" class=\"alert alert-danger\" role=\"alert\">\n" +
    "  <i class=\"fa fa-exclamation-triangle\"></i>\n" +
    "  {{ error }}\n" +
    "</div>\n" +
    "<form class=\"form-horizontal\" role=\"form\">\n" +
    "  <div class=\"form-group\">\n" +
    "    <label for=\"masterPassword\" class=\"col-sm-3 control-label\">Master password</label>\n" +
    "    <div class=\"col-sm-9\">\n" +
    "      <div class=\"input-group\">\n" +
    "        <input id=\"masterPassword\" type=\"password\" class=\"form-control\" ng-model=\"masterPassword\" ng-change=\"generatePassword()\" />\n" +
    "        <div class=\"input-group-addon\">\n" +
    "          <span class=\"master-password-control-hash\">{{controlHash}}</span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"form-group has-feedback\">\n" +
    "    <label for=\"inputText\" class=\"col-sm-3 control-label\">Input text</label>\n" +
    "    <div class=\"col-sm-9\">\n" +
    "      <input id=\"inputText\" type=\"text\" class=\"form-control\" ng-model=\"inputText\" ng-change=\"generatePassword()\" />\n" +
    "      <span ng-if=\"customProfile\" class=\"glyphicon glyphicon-bookmark form-control-feedback\"></span>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"form-group\">\n" +
    "    <label for=\"username\" class=\"col-sm-3 control-label\">Username</label>\n" +
    "    <div class=\"col-sm-9\">\n" +
    "      <input id=\"username\" type=\"text\" class=\"form-control\" ng-model=\"username\" ng-change=\"generatePassword()\" />\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"form-group\">\n" +
    "    <label for=\"generatedPassword\" class=\"col-sm-3 control-label\">Generated password</label>\n" +
    "    <div class=\"col-sm-9\">\n" +
    "      <input id=\"generatedPassword\" type=\"text\" class=\"form-control\" ng-model=\"generatedPassword\" readonly />\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</form>\n" +
    "");
}]);

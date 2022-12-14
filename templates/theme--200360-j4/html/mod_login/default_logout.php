<?php
defined('_JEXEC') or die;
JHtml::_('behavior.keepalive');
jimport('joomla.version');
$version = new JVersion();
?>
<form action="<?php echo JRoute::_('index.php', true, $params->get('usesecure')); ?>" method="post" id="login-form" class="form-vertical">
<?php if ($params->get('greeting')) : ?>
<div class="login-greeting">
<?php if ($params->get('name') == 0) : {
echo JText::sprintf('MOD_LOGIN_HINAME', htmlspecialchars($user->get('name')));
} else : {
echo JText::sprintf('MOD_LOGIN_HINAME', htmlspecialchars($user->get('username')));
} endif; ?>
</div>
<?php endif; ?>
<?php if (version_compare( JVERSION, "4", "lt") && $params->get('profilelink')) : ?>
<div class="login-profilelink">
<a href="<?php echo JRoute::_('index.php?option=com_users&view=profile'); ?>">
<?php echo JText::_('MOD_LOGIN_PROFILE'); ?></a>
</div>
<?php endif; ?>
<input class="btn btn-default" type="submit" name="Submit" value="<?php echo JText::_('JLOGOUT'); ?>"/>
<input type="hidden" name="option" value="com_users" />
<input type="hidden" name="task" value="user.logout" />
<input type="hidden" name="return" value="<?php echo $return; ?>" />
<?php echo JHtml::_('form.token'); ?>
</form>

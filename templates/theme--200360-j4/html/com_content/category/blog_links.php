<?php
defined('_JEXEC') or die;

use Joomla\CMS\Router\Route;
use Joomla\Component\Content\Site\Helper\RouteHelper;

?>

<ol class="com-content-category-blog__links nav nav-tabs nav-stacked">
	<?php foreach ($this->link_items as &$item) : ?>
		<li class="com-content-category-blog__link">
			<a href="<?php echo Route::_(RouteHelper::getArticleRoute($item->slug, $item->catid, $item->language)); ?>">
				<?php echo $item->title; ?></a>
		</li>
	<?php endforeach; ?>
</ol>